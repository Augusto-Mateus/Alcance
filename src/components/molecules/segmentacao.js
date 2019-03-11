import React, { Component } from "react";
import styled from "styled-components";

import Background from "../../static/segmentação.png";
import CircularGraph from "../particles/circularGraph";
import LoadBar from "../particles/loadBar";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 845px;
  justify-content: center;
  padding: ${width <= 768 ? "0px 0 0 0" : "0px 170px 0 170px"};
`;

const Title = styled.p`
  color: #069dc8;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const Txt = styled.p`
  color: #999;
  font-size: ${width <= 768 ? "20px" : "30px"};
  ${width <= 768 && "margin-bottom: 40px;"}
`;

class Segmentacao extends Component {
  render() {
    return (
      <Main>
        <Title>Segmentação</Title>
        <br />
        <br />
        <LoadBar />
        <Txt>Ótimo, estamos quase lá!</Txt>
        <br />
        <br />
        <CircularGraph />
      </Main>
    );
  }
}

export default Segmentacao;
