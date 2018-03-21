import { AppRegistry } from 'react-native';
import App from './App';

import firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyBll_oanbXLq-s_g7Tbp9hM6UwHkjaTBhI",
    authDomain: "todoapp-11111.firebaseapp.com",
    databaseURL: "https://todoapp-11111.firebaseio.com",
    projectId: "todoapp-11111",
    storageBucket: "todoapp-11111.appspot.com",
    messagingSenderId: "937490587630"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('Second', () => App);
