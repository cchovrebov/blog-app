import Crud from '../classes/Crud.class';
const _ = require('lodash');

import { FIREBASE_URL } from '../constants';

export interface Options {
  text: string;
  questionId: string;
}

class AnswerService extends Crud {
  private _url: string = FIREBASE_URL;

  private _paths = {
    questions: '/answers.json'
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

  async getAnswers(): Promise<Array<Options>> {
    const res = await this.get(`${this._url}${this._paths.questions}`);
    return this.toEntity(res);
  }

  createAnswer(data: Options): Promise<any> {
    const token = localStorage.getItem('token');

    if (!token) return Promise.resolve('No token');
    return this.post(`${this._url}${this._paths.questions}?auth=${token}`, data);
  }
}

export default new AnswerService();
