import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//nav and registered screen
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens/index';
//
import { 
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import {
  appInitialized
} from './redux/app/actions';
import reducers from './redux/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const combinedReducers = combineReducers(reducers);

const store = createStoreWithMiddleware(combinedReducers);

registerScreens(store, Provider);

export default class App{

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }

  onStoreUpdate() {
    let {root} = store.getState().app;
    // handle a root change
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    console.log(root);
    switch(root){
      case 'init':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'app.ListScreen', // unique ID registered with Navigation.registerScreen
            title: 'Welcome',
          },
        });
      break;
    }

  }


}

