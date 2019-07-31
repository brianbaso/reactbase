import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAfS28mDMCHA-5iZw22CbOJumzdOFS-1f0",
  authDomain: "reactbase-b7ba1.firebaseapp.com",
  databaseURL: "https://reactbase-b7ba1.firebaseio.com",
  projectId: "reactbase-b7ba1",
  storageBucket: "reactbase-b7ba1.appspot.com",
  messagingSenderId: "189653701259",
  appId: "1:189653701259:web:9b28cb22de9f8545"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
