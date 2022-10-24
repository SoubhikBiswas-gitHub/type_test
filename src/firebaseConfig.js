import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      // apiKey: process.env.REACT_APP_API_KEY ,
      // apiKey: "AIzaSyCUYro0nwo8GiA7H9i0RCzXlgvOPll7800" ,
      // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      // projectId: process.env.REACT_APP_PROJECT_ID,
      // storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
      // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      // appId:process.env.REACT_APP_APP_ID ,
      // measurementId:process.env.REACT_APP_MEASUREMENT_ID
      apiKey: "AIzaSyCUYro0nwo8GiA7H9i0RCzXlgvOPll7800",
      authDomain: "type-test-web.firebaseapp.com",
      projectId: "type-test-web",
      storageBucket: "type-test-web.appspot.com",
      messagingSenderId: "150959592328",
      appId: "1:150959592328:web:2b4dcca64d84b61c5ca03d",
      measurementId: "G-8PZV01SJZD"
    };
  

 const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();

const auth =firebase.auth();
console.log(db)
export {auth,db};




