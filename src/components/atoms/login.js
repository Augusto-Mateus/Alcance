import React, { Component } from "react";
import styled from "styled-components";
import * as firebase from "firebase";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";

import Button from "../particles/button";
import Input from "../particles/input";
import Context from "../../context";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  ${props => props.color}
  border-radius: 50px;
  ${props => props.letter};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: ${props => props.flex};
  transition: 0.3 ease;
  text-align: center;
  width: ${width <= 768 ? "300px" : "360px"};

  p {
    margin: 5px;
  }

  hr {
    border: 0.5px solid #ccc;
    width: 75%;
  }

  a {
    color: #999;
    cursor: default;
    font-size: 10px;
    pointer-events: none;
    text-decoration-line: none;
  }
`;

const FacebookBtn = styled(FirebaseAuth)`
  button {
    border-radius: 100vw;
    height: 35px;
    margin: 0;
    width: 100%;
  }
`;

const UserIcon = styled.div`
  align-items: center;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 3px #fff;
  border-radius: 100vw;
  display: flex;
  height: 130px;
  justify-content: center;
  width: 130px;
`;

const Logout = styled.button`
  background-color: rgba(256, 256, 256, 0.5);
  border: none;
  border-radius: 100vw;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 35px;
  letter-spacing: 2px;
  margin: 5px;
  width: 50% !important;
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = () =>
      this.context.setContext(prevContext => ({ logged: !prevContext.logged }));

    this.subToggle = () => {
      this.context.setContext(prevContext => ({
        register: !prevContext.register
      }));
    };

    this.uiConfig = {
      signInflow: "popup",
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      callBacks: { signInsuccess: () => false }
    };

    this.handleEmail = event => {
      const { value } = event.target;
      this.setState({ email: value });
    };
    this.handlePassword = event => {
      const { value } = event.target;
      this.setState({ password: value });
    };

    this.userInfo = () => {
      const user = firebase.auth().currentUser;
      user != null &&
        this.setState({
          name: user.providerData[Object.keys(user.providerData)[0]].displayName
        });
      this.setState({
        url: user.providerData[Object.keys(user.providerData)[0]].photoURL
      });
    };
    this.login = () => {
      const auth = firebase.auth();
      const verification = auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      verification.catch(e => {
        alert(e);
      });
    };

    this.logout = () => {
      firebase.auth().signOut();
      this.toggle();
    };

    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.toggle();
        this.userInfo();
        window.scrollTo(0, 850);
      } else {
        console.log("Error");
      }
    });
  }

  render() {
    const { name, url } = this.state;
    const { logged } = this.context;
    return (
      <Main
        flex={logged ? "space-evenly" : "center"}
        color={
          logged
            ? "background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);"
            : "background-color: #fff;"
        }
        letter={logged ? "color: #fff; font-weight: bold;" : "color: #000;"}
      >
        {!logged ? (
          <>
            <FacebookBtn
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
            <p>ou</p>
            <Input type="email" event={this.handleEmail} placeholder="E-mail" />
            <Input
              type="password"
              event={this.handlePassword}
              placeholder="Senha"
            />
            <Button name="ENTRAR" event={this.login} />
            <hr />
            <a href="sample">Não possui conta?</a>
            <Button name="CADASTRAR-SE" event={this.subToggle} />
          </>
        ) : (
          <>
            <UserIcon url={url} />
            <p>
              Bem Vindo <br />
              {name}
            </p>
            <Logout onClick={this.logout}>LogOut</Logout>
          </>
        )}
      </Main>
    );
  }
}

Login.contextType = Context;

export default Login;
