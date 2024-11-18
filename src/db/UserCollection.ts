import User from "@/Core/UserModel";
import UserRepository from "@/Core/UserRepository";
import firebase from "./config";
import "firebase/compat/firestore";

export default class UserCollection implements UserRepository {
  #conversor = {
    toFirestore(user: User) {
      return {
        name: user.name,
        age: user.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ) {
      const data = snapshot.data(options);
      return new User(data.name, data.age, snapshot.id);
    },
  };

  async save(user: User) {
    const docRef = await this.#collection().add(user);
    const doc = await docRef.get();
    const newUser = doc.data() as User;
    return newUser;
  }
  async getOne(id: string) {
    const docRef = this.#collection().doc(id);
    const doc = await docRef.get();
    const user = doc.data() as User;
    return user;
  }
  async getAll() {
    const query = await this.#collection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }
  async delete(id: string) {
    this.#collection().doc(id).delete();
  }
  async update(id: string, user: Partial<User>) {
    this.#collection().doc(id).update(user);
    const docRef = this.#collection().doc(id);
    const doc = await docRef.get();
    const updatedUser = doc.data() as User;
    return updatedUser;
  }

  #collection = () => {
    return firebase
      .firestore()
      .collection("users")
      .withConverter(this.#conversor);
  };
}
