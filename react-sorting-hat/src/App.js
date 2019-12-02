import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Sorting from "./components/Sorting";
import House from './components/House';


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
  state = {
    winner: ""
  }

  selectWinner = winner => this.setState({winner})

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Route exact path="/" component={Home} />
        <Route path="/sorting" render={(props) => <Sorting {...props} selectWinner={this.selectWinner}/>} />
        <Route path="/house" render={(props) => <House {...props} winner={this.state.winner} />} />
      </div>
    );
  }
}

export default App;
