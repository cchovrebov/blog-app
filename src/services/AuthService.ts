import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';

interface LoginProps {
  email: string
  password: string
  returnSecureToken: boolean
}

class AuthService extends Crud {
  private _apiKey = 'AIzaSyDhlP2efPbQguHrH-Ey1ucuhRJYBQ0dV0Y';
  private _signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._apiKey}`;
  private _signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._apiKey}`

  login(data: LoginProps): Promise<AxiosResponse> {
    return this.post(this._signInUrl, data);
  }

  singUp(data: LoginProps) {
    // Your code goes here
  }
}

export default new AuthService();
