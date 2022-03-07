import { connectUser } from '../services/ChatService';

export interface Options {
  email: string;
}

export default class User {
  private _email: string;

  constructor(options: Options) {
    console.log('Constructor', options);

    this._email = options.email;

    connectUser({ email: options.email });
  }

  get getEmail() {
    return this._email;
  }
}