import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';
import { Options } from '../components/Question.class'

class QuestionService extends Crud {
  private _url: string = '';

  private _paths = {
    questions: '/questions'
  }

  getQuestions(): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.questions}`);
  }

  getQuestionById(id: string): Promise<AxiosResponse> {
    return this.get(`${this._url}${this._paths.questions}/${id}`);
  }

  createQuestion(data: Options): Promise<AxiosResponse> {
    return this.post(`${this._url}${this._paths.questions}`, data);
  }

  patchQuestion(id: string, data: Options): Promise<AxiosResponse> {
    return this.patch(`${this._url}${this._paths.questions}/${id}`, data);
  }

  putQuestion(id: string, data: Options): Promise<AxiosResponse> {
    return this.put(`${this._url}${this._paths.questions}/${id}`, data);
  }

  deleteQuestion(id: string, data?: Options): Promise<AxiosResponse> {
    return this.delete(`${this._url}${this._paths.questions}/${id}`, data);
  }
}

export default new QuestionService();
