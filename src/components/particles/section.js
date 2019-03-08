import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.3px;
  padding: 5px 0px 5px 0px;
  text-decoration-line: none;
  transition: 0.5s ease;

  :focus {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    padding: 5px 15px 5px 15px;
  }

  :hover {
    background-image: linear-gradient(to right, #00dfc5, #00dfc5, #069dc8);
    padding: 5px 15px 5px 15px;
  }
`;

class Section extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = () => {
      window.scrollTo(0, this.props.scroll);
    };
  }
  render() {
    return (
      <StyledSection onClick={this.scrollTo}>
        {this.props.section}
      </StyledSection>
    );
  }
}

export default Section;
