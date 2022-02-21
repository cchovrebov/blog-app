import { AxiosResponse } from 'axios';
import Crud from '../scripts/classes/Crud.class';
import { Options } from '../scripts/classes/User.class'

class UserService extends Crud {
  private _url: string = 'https://jsonplaceholder.typicode.com';

  private _paths = {
    users: '/users'
  }

  getUsers(): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.users}`);
  }

  getUserById(id: string): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.users}/${id}`);
  }

  createUser(data: Options): Promise<AxiosResponse> {
    return this.post(`${this._url}${this._paths.users}`, data);
  }

  patchUser(id: string, data: Options): Promise<AxiosResponse> {
    return this.patch(`${this._url}${this._paths.users}/${id}`, data);
  }

  putUser(id: string, data: Options): Promise<AxiosResponse> {
    return this.put(`${this._url}${this._paths.users}/${id}`, data);
  }

  deleteUser(id: string, data?: Options): Promise<AxiosResponse> {
    return this.delete(`${this._url}${this._paths.users}/${id}`, data);
  }
}

export default new UserService();
