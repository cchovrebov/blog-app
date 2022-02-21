import { Questions } from "./classes/index";
import { Options as QuestionOptions } from './components/Question.class';
import './drafts/oop';
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

