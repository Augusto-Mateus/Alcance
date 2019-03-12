import React, { Component } from "react";
// import styled from "styled-components";

// import Background from "./static/LandingPageBackground.png";
import DataBase from "./Database";
import Context from "./context";
// import width from "./config";

// import Menu from "./components/atoms/menu";
// import Home from "./components/molecules/home";
// import ToggleSections from "./components/molecules/toggleSections";

// const Main = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
// `;

// const LandingPageHome = styled.div`
//   background-image: url(${Background});
//   background-repeat: no-repeat;
//   background-size: cover;
//   padding: ${width <= 768 ? 0 : "80px 170px 0px 170px"};
// `;

// const LandingPageSections = styled.div`
//   margin-top: -100px;
// `;

class App extends Component {
  constructor(props) {
    super(props);
    this.setContext = data => this.setState(data);
    this.state = {
      setContext: this.setContext
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <DataBase />
        {/* {width <= 768 ? (
          <Main>
            <LandingPageSections>
              <ToggleSections />
            </LandingPageSections>
            <LandingPageHome className="App">
              <Home />
            </LandingPageHome>
          </Main>
        ) : (
          <Main>
            <LandingPageSections>
              <ToggleSections />
            </LandingPageSections>
            <LandingPageHome className="App">
              <Menu />
              <Home />
            </LandingPageHome>
          </Main>
        )} */}
      </Context.Provider>
    );
  }
}

export default App;
