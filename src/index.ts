import { Questions, Question } from "./components/index";
import { Options as QuestionOptions } from './components/Question.class';
import { QuestionService } from "./services/index";
import './styles/index.scss';

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

const testData = new Question({
  userId: 'userId2',
  userName: 'User 2',
  id: 'id2',
  title: 'test',
  body: 'test body'
});

console.log(testData);


// QuestionService.createQuestion({
//   title: testData.getTitle,
//   body: testData.getBody,
//   date: testData.getDate.format('YYYY-MM-DD HH:mm:ss'),
//   userId: testData.getUserId,
//   userName: testData.getUserName
// })
//   .then(data => {
//     console.log(data);
//   }).catch(err => console.log(err))


QuestionService.getQuestions()
  .then(data => {
    console.log(data);
  }).catch(err => console.log(err))
