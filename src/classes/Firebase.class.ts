import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { FIREBASE_API_CONFIG } from '../constants';

class Firebase {
  private config = FIREBASE_API_CONFIG;

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
