import React, { Component } from "react";
import styled from "styled-components";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDLAwO7OiCcMIBBQ6Vs17AS1b2UKRNxQaI",
  authDomain: "login-86428.firebaseapp.com",
  databaseURL: "https://login-86428.firebaseio.com",
  projectId: "login-86428",
  storageBucket: "login-86428.appspot.com",
  messagingSenderId: "447345857855"
};
firebase.initializeApp(config);

// const docRef = firebase.firestore.collection("sample").doc("status");
var firestore = firebase.firestore();
const docRef = firestore.doc("samples/status");

const Main = styled.form`
  align-items: center;
  background-color: #234;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0;
  width: 100%;
  label {
    font-size: 40px;
  }
  input {
    border: none;
    border-radius: 100vw;
    font-size: 30px;
    height: 40px;
    text-align: center;
    width: 50%;
  }
`;

class DataBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.input = e => {
      const { value } = e.target;
      this.setState({ value: value });
    };

    this.data = e => {
      const { value } = this.state;
      e.preventDefault();
      docRef
        .set({
          Status: value
        })
        .then(() => {
          docRef
            .get()
            .then(doc => {
              if (doc && doc.exists) {
                const data = doc.data();
                this.setState({ newStatus: data.Status });
              }
            })
            .catch(error => {
              alert(error);
            });
        })
        .catch(error => {
          alert(error);
        });
    };
  }

  render() {
    const { newStatus } = this.state;
    return (
      <Main onSubmit={this.data}>
        <label htmlFor="new">Novo status: {newStatus}</label>
        <br />
        <input placeholder="Escreva aqui" id="new" onChange={this.input} />
      </Main>
    );
  }
}

export default DataBase;
