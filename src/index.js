import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyDLAwO7OiCcMIBBQ6Vs17AS1b2UKRNxQaI",
//   authDomain: "login-86428.firebaseapp.com",
//   databaseURL: "https://login-86428.firebaseio.com",
//   projectId: "login-86428",
//   storageBucket: "login-86428.appspot.com",
//   messagingSenderId: "447345857855"
// };
// firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
