import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import img from "./images/train.jpg";
import hat from "./images/sortingHat.png";
// font-family: 'Amita', cursive;
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

const StyledApp = styled.div`
  text-align: center;
  font-family: "Cinzel", serif;
  background-image: url(${img});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`;

const StyledH1 = styled.h1`
  color: yellow;
  font-size: 4.4rem;

  font-weight: 900;
  text-shadow: -1px 2px 5px rgba(0, 0, 0, 0.6), -2px 3px 6px rgba(0, 0, 0, 0.5),
    -3px 4px 7px rgba(0, 0, 0, 0.4), -4px 5px 8px rgba(0, 0, 0, 0.3),
    -5px 6px 9px rgba(0, 0, 0, 0.2);
  letter-spacing: 1.4rem;
  margin-bottom: 2rem;
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 2.8rem;
  text-shadow: -1px 2px 5px rgba(0, 0, 0, 0.6), -2px 3px 6px rgba(0, 0, 0, 0.5),
    -3px 4px 7px rgba(0, 0, 0, 0.4), -4px 5px 8px rgba(0, 0, 0, 0.3),
    -5px 6px 9px rgba(0, 0, 0, 0.2);
  letter-spacing: 3px;
  color: yellow;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  color: lightgreen;
  text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.8), -2px 3px 2px rgba(0, 0, 0, 0.7),
    -3px 4px 3px rgba(0, 0, 0, 0.6), -4px 4px 3px rgba(0, 0, 0, 0.5),
    -5px 5px 4px rgba(0, 0, 0, 0.4), -6px 5px 4px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 2rem;
`;

const StyledImg = styled.img`
  bottom: 0;
  height: 500px;
  position: absolute;
  pointer-events: none;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  font-size: 1.6rem;
  border: 2px solid yellow;
  color: yellow;
  transition: all 0.3s ease-in;
  font-family: "Cinzel", serif;
  font-weight: 700;
  letter-spacing: 3px;

  &:hover {
    background: yellow;
    color: black;
    transform: translateY(-2px);
    box-shadow: -2px 3px 7px rgba(0, 0, 0, 0.3);
  }

  &:active {
    outline: none;
    transform: translateY(-1px);
    box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <StyledH1>Welcome</StyledH1>
        <Span>to</Span>
        <StyledH1>Hogwarts</StyledH1>
        <StyledH2>What House Will You Be In ?</StyledH2>
        <StyledImg src={hat} />
        <StyledButton>Come... Let's Find Your House</StyledButton>
      </StyledApp>
    );
  }
}

export default App;
