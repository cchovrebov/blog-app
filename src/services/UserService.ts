import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';
import { Options } from '../classes/User.class'

class UserService extends Crud {
  private _url: string = 'https://blog-app-81fcb-default-rtdb.europe-west1.firebasedatabase.app/users.json';

  // private _paths = {
  //   users: '/users'
  // }

  getUsers(): Promise<AxiosResponse> {
    return this.get(`${this._url}`);
  }

  // getUserById(id: string): Promise<AxiosResponse> {
  //   return this.get(`${this._url}${this._paths.users}/${id}`);
  // }

  // createUser(data: Options): Promise<AxiosResponse> {
  //   return this.post(`${this._url}${this._paths.users}`, data);
  // }

  // patchUser(id: string, data: Options): Promise<AxiosResponse> {
  //   return this.patch(`${this._url}${this._paths.users}/${id}`, data);
  // }

  // putUser(id: string, data: Options): Promise<AxiosResponse> {
  //   return this.put(`${this._url}${this._paths.users}/${id}`, data);
  // }

  // deleteUser(id: string, data?: Options): Promise<AxiosResponse> {
  //   return this.delete(`${this._url}${this._paths.users}/${id}`, data);
  // }
}

export default new UserService();
