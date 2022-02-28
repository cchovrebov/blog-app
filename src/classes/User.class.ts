export interface Options {
  email: string;
}

export default class User {
  private _email: string;

  constructor(options: Options) {
    this._email = options.email;
  }

  get getEmail() {
    return this._email;
  }
}