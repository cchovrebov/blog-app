import axios, { AxiosResponse } from 'axios';
// Inkapsuliacija

// Zmogus -> vardas, pavarde, amzius, ugis, svoris
// Zmogus -> vaiksto, kalba
// Zmogus -> virskinimas, informacijos apdorojimas
// Public, private, Protected

// class Human {
//   private _firstName: string;
//   private _lastName: string;
//   protected _age: number;

//   constructor(options: any) {
//     this._firstName = options.firstName;
//     this._lastName = options.lastName;
//     this._age = options.age;
//   }

//   get getFirstName(): string {
//     return this._firstName;
//   }

//   get getLastName(): string {
//     return this._lastName;
//   }
//   // optionalParams(a: string, b?: string): void {
//   //   console.log('Test');
//   // }
// }

// class Employee extends Human {
//   constructor(options: any) {
//     super(options);
//     console.log(this._age);
//   }
// }

// const mployee = new Employee({
//   firstName: 'My firstname',
//   lastName: 'My lastname',
//   age: 10
// });

// Polimorfizmas

// abstrakcija

// abstract class Human {
//   private _firstName: string;
//   private _lastName: string;
//   protected _age: number;

//   constructor(options: any) {
//     this._firstName = options.firstName;
//     this._lastName = options.lastName;
//     this._age = options.age;
//   }

//   get getFirstName(): string {
//     return this._firstName;
//   }

//   get getLastName(): string {
//     return this._lastName;
//   }

//   abstract sayHello(): void;
//   // optionalParams(a: string, b?: string): void {
//   //   console.log('Test');
//   // }
// }

// class Employee extends Human {
//   sayHello(): void {
//     console.log('Hello');
//   }

//   constructor(options: any) {
//     super(options);
//     console.log(this._age);
//   }
// }

interface HumanInterface {
  _firstName: string;
  _lastName: string;
  _age: number;

  walk(): void;
}

class Human implements HumanInterface {
  _firstName: string;
  _lastName: string;
  _age: number;

  constructor(options: any) {
    this._firstName = options.firstName;
    this._lastName = options.lastName;
  }

  walk(): void {
    console.log('As einu');
  }
}

class Programmer extends Human {
  constructor(options: any) {
    super(options);
  }
}

new Programmer({
  firstName: 'My firstname',
  lastName: 'My lastname',
})

// Uzduotis Nr. 1
// Perdaryti Question, Questions, User klases kad visi laukai
// butu private, sukurti atitinkamus getter ir setter


// Uzduotis Nr. 2
// Aprasyti HttpRequest.interface.ts interface kuris tures metodus aprasancius
// visus Http metodus

// interface HttpRequest {
//   get(path: string): Promise<AxiosResponse>
//   // ... Visi kiti HTTP metodai
// }

// Sukurti Crud.class.ts clase kuri implementuos HttpRequest interface
// ir aprasyti CRUD visus metodus
// Klase turi tureti url lauka, tinkamai


// Sukurti QuestionService.ts kuri paveldes Crud klase ir
// aprasys visas CRUD operacijas.



// const questionService = new QuestionService();

// questionService.getQuestions()
//   .then(res => {
//     console.log(res);
//   }).catch(err => err)

// Pademonstruoti kad visi QuestionService CRUD metodai veikia
