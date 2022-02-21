import { Questions } from "./components/index";
import { Options as QuestionOptions } from './components/Question.class';
import QuestionService from '../services/QuestionService';
import '../styles/index.scss';

const data: QuestionOptions[] = [
  {
    userId: 'userId',
    userName: 'User',
    id: 'id',
    title: 'My first post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla dolore sit sed deserunt nihil ipsum labore, porro, debitis quis ipsam! Laboriosam cupiditate dolorum tenetur maxime eius. Officiis, ullam nisi!',
  },
  {
    userId: 'userId1',
    userName: 'User 1',
    id: 'id1',
    title: 'My first post1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla dolore sit sed deserunt nihil ipsum labore, porro, debitis quis ipsam! Laboriosam cupiditate dolorum tenetur maxime eius. Officiis, ullam nisi!',
  },
  {
    userId: 'userId2',
    userName: 'User 2',
    id: 'id2',
    title: 'My first post2',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla dolore sit sed deserunt nihil ipsum labore, porro, debitis quis ipsam! Laboriosam cupiditate dolorum tenetur maxime eius. Officiis, ullam nisi!',
  }
];

new Questions({
  selector: '#questions',
  questions: data,
}).renderQuestions();

// QuestionService.getQuestions()
//   .then(res => {
//     console.log(res);
//   }).catch(err => err)


// QuestionService.getQuestionById('1')
//   .then(res => {
//     console.log(res);
//   }).catch(err => err)

// QuestionService.patchQuestion('1', { title: 'test ' })
//   .then(res => {
//     console.log(res);
//   }).catch(err => err);

// QuestionService.putQuestion('1', {
//   "userId": 1,
//   "title": "test 2",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// })
//   .then(res => {
//     console.log(res);
//   }).catch(err => err);

// QuestionService.createQuestion({
//   "userId": 3,
//   "title": "Title",
//   "body": "Description"
// })
//   .then(res => {
//     console.log(res);
//   }).catch(err => err);

// QuestionService.deleteQuestion('1')
//   .then(res => {
//     console.log(res);
//   }).catch(err => err);