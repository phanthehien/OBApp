/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Scene, Router} from 'react-native-router-flux';

// import * as reducers from './src/reducers';
import rootReducer from './src/redux/RootReducer'
import RootScreen from './src/containers/RootScreen';
import devTools from 'remote-redux-devtools';
import logger from './src/middlewares/logger'
import checkAuthorize from './src/middlewares/checkAuthorize'

import  { Platform } from 'react-native'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store;
if (__DEV__) {
    const enhancer = compose(
        applyMiddleware(checkAuthorize,logger, thunk),
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
    );
    store = createStore(rootReducer, enhancer);
} else {
// const reducer = combineReducers(reducers);
    const createStoreWithMiddleware = applyMiddleware(checkAuthorize, logger, thunk)(createStore);
    store = createStoreWithMiddleware(rootReducer);
}

store.subscribe(() => {
    console.log(store.getState())
});

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
