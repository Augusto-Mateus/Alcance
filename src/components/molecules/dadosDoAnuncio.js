import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Context from "../../context";

import Background from "../../static/Dados da campanha.png";
import Icon from "../../static/edit.png";
import width from "../../config";

const Main = styled.div`
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 750px;
  justify-content: space-evenly;
  h3 {
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

const SubDiv = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-evenly;
  width: ${width <= 768 ? "300px" : "31%"};
  iframe {
    height: 100px;
    margin: 0;
    width: 70%;
  }
`;

const WrapperDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15% 0 15%;
  text-align: left;
  width: 100%;
  hr {
    border: solid #626262 0.5px;
    width: 100%;
  }
`;

const SubWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  img {
    height: 20px;
  }
`;

const AddFinal = styled.div`
  align-items: center;
  background-color: #fd6d80;
  border-radius: 37px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: 0 0 -40px 0;
  width: 100%;
  p {
    margin: 0;
  }
  h6 {
    font-weight: bold;
  }
  button {
    background-color: #ffc44c;
    border: none;
    border-radius: 100vw;
    color: #fff;
    font-size: 13px;
    height: 40px;
    letter-spacing: 1px;
    width: 70%;
  }
`;

const Preview = styled.div`
  background-color: #123321;
  border-radius: 10px;
  height: 300px;
  width: 80%;
`;

const Txt = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Bold = styled.h1`
  color: #fd6d80;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

class DadosDeCampanha extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      indicators: false,
      interval: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { paymentValue } = this.context;
    const { index, direction, indicators, interval } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <>
            <h3>Confira os dados do anúncio</h3>
            <Carousel
              activeIndex={index}
              direction={direction}
              indicators={indicators}
              interval={interval}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>
                <SubDiv>
                  <h4>Sample</h4>
                  <Preview />
                </SubDiv>
              </Carousel.Item>
              <Carousel.Item>
                <SubDiv>
                  <WrapperDiv>
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                    <hr />
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                    <hr />
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                  </WrapperDiv>
                  <iframe title="maps" />
                </SubDiv>
              </Carousel.Item>
              <Carousel.Item>
                <SubDiv>
                  <WrapperDiv>
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                    <hr />
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                    <hr />
                    <SubWrapper>
                      <div>
                        <Txt>Sample Text Goes Here</Txt>
                        <Bold>Another Sample Text Goes Here</Bold>
                      </div>
                      <img src={Icon} alt="Edit icon" />
                    </SubWrapper>
                  </WrapperDiv>
                  <AddFinal>
                    <p>Alcance total estimado</p>
                    <h6>{Math.ceil(Math.random() * 10000000)} pessoas</h6>
                    <button>FINALIZAR ANÚNCIO</button>
                  </AddFinal>
                </SubDiv>
              </Carousel.Item>
            </Carousel>
          </>
        ) : (
          <>
            <h3>Confira os dados do anúncio</h3>
            <Div>
              <SubDiv>
                <h4>Sample</h4>
                <Preview />
              </SubDiv>
              <SubDiv>
                <WrapperDiv>
                  <SubWrapper>
                    <div>
                      <Txt>Objetivo do anúncio </Txt>
                      <Bold>Objetivo</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                  <hr />
                  <SubWrapper>
                    <div>
                      <Txt>Genero e idade do público-alvo</Txt>
                      <Bold>Idades</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                  <hr />
                  <SubWrapper>
                    <div>
                      <Txt>Localização</Txt>
                      <Bold>Local da campanha</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                </WrapperDiv>
                <iframe title="maps" />
              </SubDiv>
              <SubDiv>
                <WrapperDiv>
                  <SubWrapper>
                    <div>
                      <Txt>Interesses do público-alvo</Txt>
                      <Bold>Another Sample Text Goes Here</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                  <hr />
                  <SubWrapper>
                    <div>
                      <Txt>Duração da campanha</Txt>
                      <Bold>Another Sample Text Goes Here</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                  <hr />
                  <SubWrapper>
                    <div>
                      <Txt>Orçamento total</Txt>
                      <Bold>R${paymentValue}</Bold>
                    </div>
                    <img src={Icon} alt="Edit icon" />
                  </SubWrapper>
                </WrapperDiv>
                <AddFinal>
                  <p>Alcance total estimado</p>
                  <h6>{Math.ceil(Math.random() * 10000000)} pessoas</h6>
                  <button>FINALIZAR ANÚNCIO</button>
                </AddFinal>
              </SubDiv>
            </Div>
          </>
        )}
      </Main>
    );
  }
}

DadosDeCampanha.contextType = Context;

export default DadosDeCampanha;
