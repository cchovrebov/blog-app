import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';
const _ = require('lodash');

export interface Options {
  userId?: string;
  userName?: string;
  id?: string;
  title: string;
  body: string;
  date: string;
}

class QuestionService extends Crud {
  private _url: string = 'https://blog-app-81fcb-default-rtdb.europe-west1.firebasedatabase.app';

  private _paths = {
    questions: '/questions.json'
  }

  private toEntity(data: any): Array<Options> {
    if (!data) {
      return [];
    }
    const formatedData = _.keys(data).map((key: string) => ({
      ...data[key],
      id: key
    }))

    return _.orderBy(formatedData, ['date'], ['desc']);
  }

  async getQuestions(): Promise<Array<Options>> {
    const res = await this.get(`${this._url}${this._paths.questions}`);
    return this.toEntity(res);
  }

  createQuestion(data: Options): Promise<AxiosResponse> {
    return this.post(`${this._url}${this._paths.questions}`, data);
  }

  // getQuestionById(id: string): Promise<AxiosResponse> {
  //   return this.get(`${this._url}${this._paths.questions}/${id}`);
  // }

  // patchQuestion(id: string, data: Options): Promise<AxiosResponse> {
  //   return this.patch(`${this._url}${this._paths.questions}/${id}`, data);
  // }

  // putQuestion(id: string, data: Options): Promise<AxiosResponse> {
  //   return this.put(`${this._url}${this._paths.questions}/${id}`, data);
  // }

  // deleteQuestion(id: string, data?: Options): Promise<AxiosResponse> {
  //   return this.delete(`${this._url}${this._paths.questions}/${id}`, data);
  // }
}

export default new QuestionService();
