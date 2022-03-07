import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';
import { FIREBASE_API_KEY } from '../constants';

interface LoginProps {
  email: string
  password: string
  returnSecureToken: boolean
}

class AuthService extends Crud {
  private _apiKey = FIREBASE_API_KEY;
  private _signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._apiKey}`;
  private _signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._apiKey}`

  login(data: LoginProps): Promise<AxiosResponse> {
    return this.post(this._signInUrl, data);
  }

  singUp(data: LoginProps): Promise<AxiosResponse> {
    return this.post(this._signUpUrl, data);
  }
}

export default new AuthService();
