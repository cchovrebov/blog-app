import { AxiosResponse } from 'axios';
import Crud from '../scripts/classes/Crud.class';

class QuestionService extends Crud {
  private _url: string = 'https://jsonplaceholder.typicode.com';

  private _paths = {
    questions: '/posts'
  }

  getQuestions(): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.questions}`);
  }

  getQuestionById(id: string): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.questions}/${id}`);
  }

  createQuestion(data: any): Promise<AxiosResponse> {
    return this.post(`${this._url}${this._paths.questions}`, data);
  }

  patchQuestion(id: string, data: any): Promise<AxiosResponse> {
    return this.patch(`${this._url}${this._paths.questions}/${id}`, data);
  }

  putQuestion(id: string, data: any): Promise<AxiosResponse> {
    return this.put(`${this._url}${this._paths.questions}/${id}`, data);
  }

  deleteQuestion(id: string, data?: any): Promise<AxiosResponse> {
    return this.delete(`${this._url}${this._paths.questions}/${id}`, data);
  }
}

export default new QuestionService();
