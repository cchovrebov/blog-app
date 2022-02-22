import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class Firebase {
  private config = {
    apiKey: "AIzaSyDhlP2efPbQguHrH-Ey1ucuhRJYBQ0dV0Y",
    authDomain: "blog-app-81fcb.firebaseapp.com",
    databaseURL: "https://blog-app-81fcb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-app-81fcb",
    storageBucket: "blog-app-81fcb.appspot.com",
    messagingSenderId: "415824968449",
    appId: "1:415824968449:web:dc74b7236b9eeb1fecf900"
  };

  private app: any;
  private database: any;

  constructor() {
    this.app = initializeApp(this.config);
    this.database = getFirestore(this.app);

  }

  get getApp() {
    return this.app;
  }

  async getTest() {
    const testCol = collection(this.database, 'test');
    const testSnapshot = await getDocs(testCol);
    const testList = testSnapshot.docs.map(doc => doc.data());
    return testList;
  }
}

export default new Firebase();
