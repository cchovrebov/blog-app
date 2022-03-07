import { AxiosResponse } from 'axios';
import Crud from '../classes/Crud.class';
const _ = require('lodash');

import { FIREBASE_QUESTIONS_URL } from '../constants';

export interface Options {
  userEmail?: string;
  id?: string;
  title: string;
  body: string;
  date: string;
}

class QuestionService extends Crud {
  private _url: string = FIREBASE_QUESTIONS_URL;

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

  createQuestion(data: Options): Promise<any> {
    console.log(data);

    const token = localStorage.getItem('token');

    if (!token) {
      console.log('No token');

      return Promise.resolve('Test');
    }
    return this.post(`${this._url}${this._paths.questions}?auth=${token}`, data);
  }
}

export default new QuestionService();
