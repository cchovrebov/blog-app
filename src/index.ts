import { Questions } from "./components/index";
import { Options as QuestionOptions } from './components/Question.class';
import TestService from './drafts/TestService';
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

const testData = {
  title: 'test',
  description: 'test description'
}

// TestService.createTest(testData)
//   .then(data => {
//     console.log(data);
//   }).catch(err => console.log(err))


// TestService.getTest()
//   .then(data => {
//     console.log(data);
//   }).catch(err => console.log(err))
