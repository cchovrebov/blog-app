import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';

class TestService extends Crud {
  private _url: string = 'https://blog-app-81fcb-default-rtdb.europe-west1.firebasedatabase.app';

  private _paths = {
    test: '/test.json'
  }

  private toEntity(data: any): Array<any> {
    return Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
  }

  createTest(data: any): Promise<AxiosResponse> {
    return this.post(`${this._url}${this._paths.test}`, data);
  }

  async getTest(): Promise<any> {
    const data = await this.get(`${this._url}${this._paths.test}`);
    return this.toEntity(data);
  }
}

export default new TestService();
