import { connectUser } from '../services/ChatService';

export interface Options {
  email: string;
  token: string;
}

export default class User {
  private _email: string;
  private _token: string;

  constructor(options: Options) {
    this._email = options.email;
    this._token = options.token;

    connectUser({
      email: options.email,
      token: options.token,
    })
  }

  get getEmail() {
    return this._email;
  }

  get getToken() {
    return this._token;
  }
}