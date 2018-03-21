import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { AboutPage} from './application';
import HomePage from './application/home';
import LoginPage from './application/login';
import Rigistration  from './application/signup';
// import firebase from 'firebase'
// import * as firebase from 'firebase'

//  var config = {
//     apiKey: "AIzaSyBll_oanbXLq-s_g7Tbp9hM6UwHkjaTBhI",
//     authDomain: "todoapp-11111.firebaseapp.com",
//     databaseURL: "https://todoapp-11111.firebaseio.com",
//     projectId: "todoapp-11111",
//     storageBucket: "todoapp-11111.appspot.com",
//     messagingSenderId: "937490587630"
//   };
//   firebase.initializeApp(config);

const Routing = StackNavigator({
  login: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Login',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  signup: {
    screen: Rigistration,
    navigationOptions: {
      title: 'Registeration',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Dashboard: {
    screen: TabNavigator({
      Home: {
        screen: HomePage,
      },
      About: {
        screen: AboutPage,
      }
    }),
    navigationOptions: {
      header: null
    }
  },
  // About: {
  //   screen: AboutPage,
  // },
});

export default Routing