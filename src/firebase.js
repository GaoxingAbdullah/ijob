import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrNwHUddniJz4NBKsxDaM1ePhAkcEfOgA",
    authDomain: "linkedin-clone-98ed5.firebaseapp.com",
    projectId: "linkedin-clone-98ed5",
    storageBucket: "linkedin-clone-98ed5.appspot.com",
    messagingSenderId: "375912538674",
    appId: "1:375912538674:web:c95c18772a5c441983922b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;