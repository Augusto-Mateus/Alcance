import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";

import Context from "../../context";
import Rank from "../atoms/rank";
import width from "../../config";

const Main = styled.div`
  background-color: #fd6d80;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 725px;
  justify-content: center;
  padding: ${width <= 768 ? "20px" : "0px 160px 0px 160px"};
`;

const Div = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0 0px 0;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p:first-child {
    font-size: ${width <= 768 ? "30px" : "40px"};
  }
  p:last-child {
    font-size: auto;
  }
`;

const Input = styled.input`
  align-self: center;
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 2px;
  border-left: none;
  border-right: none;
  color: #fff;
  font-size: ${width <= 768 ? "20px" : "45px"};
  height: ${width <= 768 ? "30px" : "60px"};
  text-align: center;
  text-justify: center;
  width: 35%;
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::placeholder {
    color: #fff;
    font-size: ${width <= 768 ? "20px" : "45px"};
    font-weight: bold;
    text-align: center;
    text-justify: center;
  }
`;

const BootstrapInput = styled(InputGroup)`
  display: flex;
  justify-content: center;
`;

const Currency = styled(InputGroup.Text)`
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 2px;
  border-bottom-left-radius: 100vw;
  border-right: solid #fff 0.5px;
  border-top-left-radius: 100vw;
  color: #fff;
  font-size: ${width <= 768 ? "20px" : "45px"};
  font-weight: bold;
  height: ${width <= 768 ? "30px" : "60px"};
  text-align: center;
  text-justify: center;
`;

const Cents = styled(InputGroup.Text)`
  background-color: rgba(0, 0, 0, 0);
  border: solid #fff 2px;
  border-bottom-right-radius: 100vw;
  border-left: solid #fff 0.5px;
  border-top-right-radius: 100vw;
  color: #fff;
  font-size: ${width <= 768 ? "20px" : "45px"};
  font-weight: bold;
  height: ${width <= 768 ? "30px" : "60px"};
  text-align: center;
  text-justify: center;
`;

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      indicators: false,
      interval: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);

    this.handleValue = event => {
      const { value } = event.target;
      this.context.setContext({ paymentValue: value + ".00" });
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, interval, indicators } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            interval={interval}
            indicators={indicators}
          >
            <Carousel.Item>
              <SubDiv>
                <p>
                  Lorem {width > 768 && <br />} impsum dolor{" "}
                  {width > 768 && <br />} sit amet.
                </p>
                <BootstrapInput>
                  <InputGroup.Prepend>
                    <Currency>R$</Currency>
                  </InputGroup.Prepend>
                  <Input
                    placeholder="2000"
                    type="number"
                    onChange={this.handleValue}
                  />
                  <InputGroup.Append>
                    <Cents>.00</Cents>
                  </InputGroup.Append>
                </BootstrapInput>
                <p>
                  Voce pode digitar valores diferentes {width > 768 && <br />}{" "}
                  para ver outras opções de anuncio.
                </p>
              </SubDiv>
            </Carousel.Item>
            <Carousel.Item>
              <Rank />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Div>
            <SubDiv>
              <p>
                Lorem {width > 768 && <br />} impsum dolor
                {width > 768 && <br />} sit amet.
              </p>
              <BootstrapInput>
                <InputGroup.Prepend>
                  <Currency>R$</Currency>
                </InputGroup.Prepend>
                <Input
                  placeholder="2000"
                  type="number"
                  onChange={this.handleValue}
                />
                <InputGroup.Append>
                  <Cents>.00</Cents>
                </InputGroup.Append>
              </BootstrapInput>
              <p>
                Voce pode digitar valores diferentes {width > 768 && <br />}
                para ver outras opções de anuncio.
              </p>
            </SubDiv>
            <Rank />
          </Div>
        )}
      </Main>
    );
  }
}

Ranking.contextType = Context;

export default Ranking;
