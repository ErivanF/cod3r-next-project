export default class User {
  id?: string;
  name: string;
  age: number;

  constructor(name: string, age: number, id: string = "") {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  data() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
    };
  }
}
