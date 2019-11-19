import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBIOF5p3iXQ8j91wlw6DKVUwxnGgPxfZpE',
  authDomain: 'mcity-b672b.firebaseapp.com',
  databaseURL: 'https://mcity-b672b.firebaseio.com',
  projectId: 'mcity-b672b',
  storageBucket: 'mcity-b672b.appspot.com',
  messagingSenderId: '180664114629',
  appId: '1:180664114629:web:45233ed29d393b3ab47fac',
  measurementId: 'G-5D1YCV44QV'
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
};
