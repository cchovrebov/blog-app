export interface Options {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(options: Options) {
    this._id = options.id;
    this._name = options.name;
    this._email = options.email;
    this._password = options.password;
  }

  static login(email: string, password: string) {
    console.log(email, password);
  }

  static logout() {
    console.log('Logging out...');
  }
}