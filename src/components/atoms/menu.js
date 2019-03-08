import React, { Component } from "react";
import styled from "styled-components";

import Section from "../particles/section";

const sections = [
  "HOME",
  "OBJETIVOS",
  "SEGMENTAÇÃO",
  "PÚBLICO ALVO",
  "RANKING",
  "DURAÇÃO DE CAMPANHA",
  "DADOS DA CAMPANHA",
  "PAGAMENTO",
  "CONTAS"
];

const scroll = [0, 850, 1570, 2325, 3080, 3850, 4600, 5400, 8000];

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 130px;
  padding: 0;
  width: 100%;
`;

class Menu extends Component {
  render() {
    return (
      <Main>
        {sections.map(section => {
          return (
            <Section
              scroll={scroll[sections.indexOf(section)]}
              section={section}
              key={section}
            />
          );
        })}
      </Main>
    );
  }
}

export default Menu;
