import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import houseData from './HouseData';

// =========================
// ====Styled Components====
// =========================

const HouseDiv = styled.div`
  background-color: red;
  padding: 2rem;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;

  z-index: 1;
  position: relative;
  
  & > a {
    justify-self: flex-end;
    text-decoration: none;
    color: yellow;
    margin: 0 auto;
    font-size: 1rem;
    padding: 1rem;
    text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.8),
    -2px 3px 2px rgba(0, 0, 0, 0.7), -3px 4px 3px rgba(0, 0, 0, 0.6),
    -4px 4px 3px rgba(0, 0, 0, 0.5), -5px 5px 4px rgba(0, 0, 0, 0.4),
    -6px 5px 4px rgba(0, 0, 0, 0.3);
  }
  `;
  
  const Paper = styled.div`
  font-family: "Cinzel", serif;
  background: rgba(255,255,255,1);
  padding: 1.2rem;
  position: relative;
  max-width: 450px;
  margin: 60px auto 0;
  font-size: .9rem;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: -1px 1px 7px rgba(0,0,0,.5);
  
  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background: rgba(255,255,255,1);
    position: absolute;
    z-index: -1;
    transform: rotate(-5deg) translateY(-18px);
    box-shadow: -1px 1px 7px rgba(0,0,0,.5);
  }


`;

// =========================
// ====     Globals     ====
// =========================


export default function House({winner}) {
  console.log(houseData);
  const colors = houseData[winner].colors,
      traits = houseData[winner].traits,
      wizards = houseData[winner].wizards;
  
  return (
    <HouseDiv style={{backgroundImage: `url(./img/${winner}.png)`}}>
      <Paper>
        <h1>{winner}</h1>
        <h2>{`Your house colors are ${colors[0]} & ${colors[1]}`}</h2>
        <br />
        <p>{`Valued Traits: ${traits.toString().split(',').join(', ')}.`}</p>
        <br />
        <p>{houseData[winner].history}</p>
        <br />
        <p>{`Some famous wizards from this house are ${wizards.toString().split(',').join(', ')}`}</p>
      </Paper>

      <Link to="/" style={{textTransform: 'uppercase', background: 'black', marginTop: '30px', fontSize: '20px'}}>Start Over</Link>

      <a href="https://www.deviantart.com/kooro-sama/gallery/?catpath=/" rel="noopener noreferrer" target="_blank">Art from Kooro-Sama Deviant Art</a>
    </HouseDiv>
  )
}
