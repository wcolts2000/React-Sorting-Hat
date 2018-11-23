import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Sorting from "./components/Sorting";

const GlobalStyle = createGlobalStyle`
  html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #000;
    font-size: 62.5%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Route exact path="/" component={Home} />
        <Route exact path="/sorting" component={Sorting} />
      </div>
    );
  }
}

export default App;
