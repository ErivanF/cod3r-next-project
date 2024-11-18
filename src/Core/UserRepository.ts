import User from "./UserModel";

export default interface UserRepository {
  save(user: User): Promise<User>;
  getOne(id: string): Promise<User>;
  getAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
  update(id: string, user: Partial<User>): Promise<User>;
}
