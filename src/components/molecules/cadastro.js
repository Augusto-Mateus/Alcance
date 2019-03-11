import React, { Component } from "react";
import styled from "styled-components";
import * as firebase from "firebase";
import Form from "react-bootstrap/Form";

import CadastroImg from "../../static/Cadastro.png";
import Objetivos from "../../static/Objetivos.png";
import width from "../../config";

const webKit = "-webkit-";

const Main = styled.div`
  align-items: center;
  background-image: url(${Objetivos});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 750px;
  justify-content: center;
  padding-top: 100px;
  text-align: center;
  h1 {
    background: linear-gradient(to right, #322cd4, #6e44f0);
    font-weight: bold;
    ${webKit}background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Div = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 3px 10px #ddd;
  display: flex;
  height: 500px;
  justify-content: space-between;
  padding: 0;
  width: 90%;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 50px 0 50px;
  transition: 0.3s ease;
  width: ${width <= 768 ? "100%" : "60%"};
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    color: #bbb;
    padding: 0;
    ::placeholder {
      color: #bbb;
    }
    :focus {
      border-bottom: 1px solid #aaa;
    }
  }
  input::-webkit-calendar-picker-indicator,
  input::-webkit-inner-spin-button,
  input::-webkit-clear-button {
    display: none;
  }
  input::-webkit-file-upload-button {
    color: #bbb;
    border: none;
    background: none;
    margin-left: -6px;
  }
`;

const Submit = styled.button`
  align-self: flex-start;
  background: linear-gradient(to left, #322cd4, #6e44f0);
  border: 1px solid #ddd;
  border-radius: 100vw;
  color: #fff;
  height: 40px;
  width: 50%;
`;

const Img = styled.img`
  height: 500px;
  width: 518px;
`;

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "number",
      file: "text"
    };

    this.type = e => {
      const { type } = e.target;
      type === "number"
        ? this.setState({ date: "date" })
        : this.setState({ file: "file" });
    };

    this.set = event => {
      const { value } = event.target;
      const { placeholder } = event.target;
      placeholder === "Nome" && this.setState({ nome: value });
      placeholder === "Data de nascimento" && this.setState({ data: value });
      placeholder === "CPF" && this.setState({ CPF: value });
      placeholder === "Email" && this.setState({ email: value });
      placeholder === "Telefone" && this.setState({ phone: value });
      placeholder === "Senha" && this.setState({ password: value });
    };

    this.createAccount = () => {
      const { email, password } = this.state;
      if (!email || !password) {
        alert("Preencha todos os campos do cadastro!!!");
      } else {
        const auth = firebase.auth();
        const verification = auth.createUserWithEmailAndPassword(
          this.state.email,
          this.state.password
        );
        verification.catch(e => {
          console.log(e.message);
        });
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 1000);
    firebase.auth().onAuthStateChanged(firebaseUser => {
      !firebaseUser && console.log("Error");
    });
  }

  render() {
    const { file, date } = this.state;
    return (
      <Main>
        <h1>Cadastre-se</h1>
        <Div>
          <SubDiv>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type={file}
                  placeholder="Foto de perfil"
                  onFocus={this.type}
                  accept="image/x-png,image/gif,image/jpeg"
                />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type={date}
                  onFocus={this.type}
                  placeholder="Data de nascimento"
                />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control type="number" placeholder="CPF" />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.set}
                />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control type="number" placeholder="Telefone" />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  onChange={this.set}
                />
                <Form.Text />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Confirmar senha" />
                <Form.Text />
              </Form.Group>
            </Form>
            <Submit type="button" onClick={this.createAccount}>
              Cadastrar
            </Submit>
          </SubDiv>
          {width > 768 && <Img src={CadastroImg} />}
        </Div>
      </Main>
    );
  }
}

export default Cadastro;
