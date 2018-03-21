import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './Routing';
import store from './application/store';
import { Provider } from 'react-redux';
import  firebase  from 'firebase';
// Initialize Firebase
class App extends Component {
    render() {
      return (
        <Provider store={store}>
  
          <Router />
  
        </Provider>
      );
    }
  }
export default App;
// AppRegistry.registerComponent('First', () => App);
// AppRegistry.registerComponent('Chatapp', () => Chatapp);