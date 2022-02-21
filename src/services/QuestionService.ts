import { AxiosResponse } from 'axios';
import FirebaseCrud from '../scripts/classes/FirebaseCrud.class';

class QuestionService extends FirebaseCrud {
  private _paths = {
    questions: '/posts'
  }

  getQuestions(): Promise<AxiosResponse> {
    return this.get(this._paths.questions);
  }
}

export default new QuestionService();