import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPgdkVdf4drwtAlmJAZF7zI5ca-tVsPD0",
  authDomain: "ijob-cst.firebaseapp.com",
  projectId: "ijob-cst",
  storageBucket: "ijob-cst.appspot.com",
  messagingSenderId: "58451643039",
  appId: "1:58451643039:web:dffe2a66d2441a94abf0aa"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;