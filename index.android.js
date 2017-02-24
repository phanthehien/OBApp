/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Scene, Router} from 'react-native-router-flux';

import * as reducers from './src/reducers';

import SignInScreen from './src/containers/SignInScreen'
import SignUpScreen from './src/containers/SignUpScreen'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class AppDemo extends Component {
  render() {
    return (

        <Provider store={store}>
          <Router >
            <Scene key="root" hideNavBar={true}>
              <Scene  intital={true} key="signIn" component={SignInScreen}/>
              <Scene  key="signUp" component={SignUpScreen}/>
            </Scene>
          </Router>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppDemo', () => AppDemo);
