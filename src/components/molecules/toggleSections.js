import React, { Component } from "react";
import styled from "styled-components";

import Contas from "./contas";
import Context from "../../context";
import Cadastro from "../../components/molecules/cadastro";
import Duracao from "./duracaoDeCampanha";
import NextSectionButton from "../particles/nextSectionButton";
import Pagamento from "./pagamento";
import PublicoAlvo from "./publicoAlvo";
import Ranking from "./ranking";
import Segmentacao from "./segmentacao";
import Objetivo from "./objetivo";
import DadosDeCampanha from "./dadosDoAnuncio";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubDivReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

class ToggleSection extends Component {
  render() {
    const { logged, register } = this.context;
    return (
      <>
        {!logged ? (
          register ? (
            <Cadastro />
          ) : null
        ) : (
          <Main>
            <Objetivo />
            <Segmentacao />
            <SubDivReverse>
              <PublicoAlvo />
              <NextSectionButton scroll={2325} />
            </SubDivReverse>
            <SubDivReverse>
              <Ranking />
              <NextSectionButton scroll={3080} />
            </SubDivReverse>
            <SubDivReverse>
              <Duracao />
              <NextSectionButton scroll={3850} />
            </SubDivReverse>
            <SubDivReverse>
              <DadosDeCampanha />
              <NextSectionButton scroll={4600} />
            </SubDivReverse>
            <SubDivReverse>
              <Contas />
              <SubDiv>
                <Pagamento />
                <NextSectionButton scroll={8000} />
              </SubDiv>
              <NextSectionButton scroll={5400} />
            </SubDivReverse>
          </Main>
        )}
      </>
    );
  }
}

ToggleSection.contextType = Context;

export default ToggleSection;
