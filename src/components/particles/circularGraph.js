import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import Ellipse from "../../static/Ellipse.png";
import width from "../../config";

const loads = ["load 1", "load 2", "load 3", "load 4"];

const Main = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: row;
  justify-content: center;
  margin: ${width <= 768 ? "0" : "50px 0 0 0"};
  ${width <= 768 && "overflow-x: scroll;"}
  width: 100%;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubDiv = styled.div`
  align-items: center;
  background: url(${Ellipse});
  background-color: rgba(100, 100, 100, 0.3);
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  ${width > 768 && "margin: 0 20px 0 20px;"}
  width: 180px;
`;

const Percent = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 0 0;
  pointer-events: none;
`;

const SimpleTxt = styled.p`
  margin: 0 0 0 0;
  pointer-events: none;
`;

const Pop = styled(Popover)`
  color: #000;
  div {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      input {
        margin-left: 10px;
        margin-top: 6px;
      }
    }
  }
`;

class CircularGraph extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      index: 0,
      controls: true,
      indicators: false,
      slide: true,
      direction: null,
      interval: 0,
      show: false
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const {
      index,
      direction,
      controls,
      indicators,
      slide,
      interval
    } = this.state;
    return (
      <Main>
        {width <= 768 ? (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            indicators={indicators}
            controls={controls}
            slide={slide}
            interval={interval}
          >
            {loads.map(load => {
              return (
                <Carousel.Item key={load}>
                  <Div>
                    <SubDiv>
                      <Percent>100%</Percent>
                      <SimpleTxt>Completo</SimpleTxt>
                    </SubDiv>
                    <SimpleTxt>{load}</SimpleTxt>
                  </Div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          loads.map(load => {
            return (
              <Div key={load}>
                <SubDiv onClick={this.handleClick}>
                  <Percent>100%</Percent>
                  <SimpleTxt>Completo</SimpleTxt>
                </SubDiv>
                <SimpleTxt>{load}</SimpleTxt>
                <Overlay
                  show={this.state.show}
                  target={this.state.target}
                  placement="bottom"
                  container={this}
                  containerPadding={20}
                >
                  <Pop
                    id="popover-contained"
                    title="Escolha suas palavras chaves"
                  >
                    <div>
                      <label for="Sample1">Sample1</label>
                      <input type="checkbox" id="Sample1" />
                    </div>
                    <div>
                      <label for="Sample2">Sample2</label>
                      <input type="checkbox" id="Sample2" />
                    </div>
                    <div>
                      <label for="Sample3">Sample3</label>
                      <input type="checkbox" id="Sample3" />
                    </div>
                    <div>
                      <label for="Sample4">Sample4</label>
                      <input type="checkbox" id="Sample4" />
                    </div>
                    <div>
                      <label for="Sample5">Sample5</label>
                      <input type="checkbox" id="Sample5" />
                    </div>
                  </Pop>
                </Overlay>
              </Div>
            );
          })
        )}
      </Main>
    );
  }
}

export default CircularGraph;
