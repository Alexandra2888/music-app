import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuPyzT4f92Ycs8qAcqrpf13ZvzWdApkpw',
  authDomain: 'music-app-550bd.firebaseapp.com',
  projectId: 'music-app-550bd',
  storageBucket: 'music-app-550bd.appspot.com',
  appId: '1:131655879480:web:d91b8621ac27c9d6fbcfcd',
  measurementId: 'G-GYGPZ9NC6Q',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
