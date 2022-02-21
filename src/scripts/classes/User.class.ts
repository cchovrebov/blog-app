export interface Options {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class User {
  _id: string;
  _name: string;
  _email: string;
  _password: string;

  constructor(options: Options) {
    this._id = options.id;
    this._name = options.name;
    this._email = options.email;
    this._password = options.password;
  }

  login() {
    console.log(`Logging in with credentials email: ${this._email}, password: ${this._password}`);
  }

  logout() {
    console.log('Logging out...');
  }
}