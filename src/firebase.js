import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAhocwXkOlSXyNGspEah0NNfEsfLParSR0',
  authDomain: 'ukolnicek666.firebaseapp.com',
  projectId: 'ukolnicek666',
  messagingSenderId: '519779367425',
  appId: '1:519779367425:web:3c6de0c462cefd1a7a9e00',
  databaseURL: 'https://ukolnicek666-default-rtdb.firebaseio.com',
  storageBucket: 'ukolnicek666.appspot.com',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
