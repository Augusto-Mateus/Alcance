import React, { Component } from "react";
import styled from "styled-components";

import facebook from "../../static/facebook.png";
import instagram from "../../static/instagram.png";
import spotify from "../../static/spotify.png";
import width from "../../config";

const imgs = [facebook, instagram, spotify];

const porcentagem = 80;

const Main = styled.div`
  align-items: center;
  background-color: #fff;
  ${props => props.focus};
  border-radius: 40px;
  color: #626262;
  display: flex;
  height: 120px;
  justify-content: flex-start;
  margin-bottom: 15px;
  transition: 0.3s ease;
  width: 100%;
  div {
    pointer-events: none;
    div {
      display: flex;
    }
  }
  p {
    margin: 2px;
  }
`;

const Img = styled.div`
  align-items: center;
  border: solid #626262 1px;
  border-radius: 100%;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 0px 24px 0px 24px;
  pointer-events: none;
  width: 70px;
  img {
    height: 40px;
  }
`;

const SmallTxt = styled.p`
  font-size: 12px;
`;

const Graph = styled.div`
  border: solid #999 2px;
  border-radius: 100px;
  height: 15px;
  width: ${width <= 768 ? "100px;" : "280px;"};
  div {
    background-color: #00ccb4;
    background-repeat: no-repeat;
    border-radius: 100px;
    height: 15px;
    margin-left: -2px;
    margin-top: -2px;
    width: ${porcentagem + 3 + "%"};
  }
`;

const Label = styled.p`
  background-color: #00ccb4;
  border-radius: 100px;
  color: #fff;
  font-size: 12px;
  height: 16px;
  margin-left: 12px;
  padding-top: 2px;
  text-align: center;
  text-indent: 2px;
  width: 36px;
`;

class Ranked extends Component {
  render() {
    return (
      <Main onClick={this.props.event} id={this.props.info}>
        <Img>
          <img alt="Logo" src={imgs[this.props.img]} />
        </Img>
        <div>
          <SmallTxt>Marca</SmallTxt>
          <p>{this.props.info}</p>
          <SmallTxt>Recomendação:</SmallTxt>
          <div>
            <Graph>
              <div />
            </Graph>
            <Label>{porcentagem + "%"}</Label>
          </div>
        </div>
      </Main>
    );
  }
}

export default Ranked;
