/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Scene, Router} from 'react-native-router-flux';

// import * as reducers from './src/reducers';
import rootReducer from './src/redux/RootReducer'
import RootScreen from './src/containers/RootScreen';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default class AppDemo extends Component {
  render() {
    return (
        <Provider store={store}>
          <RootScreen />
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
