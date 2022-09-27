import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYOpRJzKfDRuSczUPuWfO94nvRqUsEpMo",
    authDomain: "todo-e6a6b.firebaseapp.com",
    projectId: "todo-e6a6b",
    storageBucket: "todo-e6a6b.appspot.com",
    messagingSenderId: "899337175505",
    appId: "1:899337175505:web:968096fcce78cf9c59a0f0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };