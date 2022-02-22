// // 1. Procedurinis
// // data -> programa -> proceduros (funkcijos) -> rezultatas

// // const width = 100;
// // const heigth = 150;

// // const rectArea = (a, b) => {
// //   return a * b;
// // }
// // rectArea(width, heigth);
// // console.log(rectArea(width, heigth));

// // 2 OOP
// // Zmogus -> vardas, pavarde, amzius, ugis, svoris
// // Zmogus -> vaiksto, kalba
// // const zmogus = {
// //   name: 'test'
// // }
// // console.log(zmogus);

// class Human {
//   static count = 0;

//   constructor(options) {
//     this._firstName = options.firstName;
//     this._lastName = options.lastName;
//     this._age = options.age;
//     this._weight = options.weight;
//     this._heigth = options.heigth;
//     Human.count++;
//     console.log(`${Human.count} human created`);
//   }

//   // Metodai
//   sayHello() {
//     console.log(`Hello, my name is ${this._firstName}`);
//   }

//   // Setter
//   set firstName(firstName) {
//     this._firstName = firstName;
//   }

//   // Getter
//   get firstName() {
//     return this._firstName;
//   }
// }

// // const human = new Human({
// //   firstName: 'MyName',
// //   lastName: 'MyLastName',
// //   age: 30,
// //   weight: 80,
// //   heigth: 90
// // });
// // const human2 = new Human({
// //   firstName: 'MyName2',
// //   lastName: 'MyLastName2',
// //   age: 30,
// //   weight: 80,
// //   heigth: 90
// // });

// // human.sayHello();
// // human2.sayHello();

// // human.firstName = 'MyNewName';

// // class Employee extends Human {
// //   constructor(options) {
// //     super(options);
// //     this._expYears = options.expYears;
// //     this._profession = options.profession;
// //   }

// //   sayHello() {
// //     console.log(`Hello, my name is ${this._firstName}, I'm ${this._profession}`);
// //   }
// // }

// // const employee = new Employee({
// //   firstName: 'MyName3',
// //   lastName: 'MyLastName3',
// //   age: 30,
// //   weight: 80,
// //   heigth: 90,
// //   expYears: 5,
// //   profession: 'Developer'
// // });

// // employee.sayHello();

// // ==========================================================

// // class Component {
// //   constructor(selector) {
// //     this.$el = document.querySelector(selector);
// //   }

// //   show() {
// //     this.$el.style.display = 'block';
// //   }

// //   hide() {
// //     this.$el.style.display = 'none';
// //   }
// // }

// // class Box extends Component {
// //   constructor(options) {
// //     super(options.selector);
// //     this.$el.style.width = options.width;
// //     this.$el.style.height = options.height;
// //     this.$el.style.background = options.background;
// //   }
// // }

// // class Circle extends Box {
// //   constructor(options) {
// //     super(options);
// //     this.$el.style.borderRadius = options.radius;
// //   }
// // }

// // const box = new Box({
// //   selector: '#box',
// //   width: '100px',
// //   height: '200px',
// //   background: 'red'
// // });

// // const circle = new Circle({
// //   selector: '#circle',
// //   width: '100px',
// //   height: '100px',
// //   background: 'blue',
// //   radius: '100%'
// // })

// // circle.hide();

// // ===========================================================

// import { PostsTS } from "./classes/index";

// const data = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
// ];


// const data2 = [
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
//   {
//     "userId": 1,
//     "id": 6,
//     "title": "dolorem eum magni eos aperiam quia",
//     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//   }
// ];

// new PostsTS({
//   selector: '#posts',
//   posts: data,
// }).renderPosts();

// new PostsTS({
//   selector: '#posts2',
//   posts: data2,
// }).renderPosts();
