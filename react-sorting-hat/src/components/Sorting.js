import React, { Component } from 'react';
import styled from 'styled-components';
import studyhall from '../images/study.jpg';
import book from '../images/book.png';
import quill from '../images/quill.svg';
import './Sorting.css';
import gryffindor from '../images/gryffindorCrest.png';
import hufflepuff from '../images/hufflepuffCrest.png';
import ravenclaw from '../images/ravenclawCrest.png';
import slytherin from '../images/slytherinCrest.png';
import sortingQuestions from './QuestionsData';
import Quiz from './Quiz';

// ====================
// Component
// ====================

export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      questions: sortingQuestions,
      questionNumber: 0,
      hufflepuff: 0,
      ravenclaw: 0,
      gryffindor: 0,
      slytherin: 0
    };    
  }

  handleSelection = e => {
    const answer = e.target.id;
    e.target.selected = false;
    this.setState(prevState => ({
      questionNumber: Number(prevState.questionNumber + 1),
      [answer]: Number(prevState[answer] + 1)
    }));
  };

  handleSorting = () => {
    const houses = {
      hufflepuff: this.state.hufflepuff,
      ravenclaw: this.state.ravenclaw,
      gryffindor: this.state.gryffindor,
      slytherin: this.state.slytherin
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    // courtesy of https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object answer by polyccon
    let maxSelected = Object.keys(houses).filter(x => {
      return houses[x] === Math.max.apply(null, Object.values(houses))
    })

    if (maxSelected.length > 1) {
      this.props.selectWinner(maxSelected[getRandomInt(maxSelected.length)])
      this.props.history.push('/house')
    } else {
      this.props.selectWinner(maxSelected[0])
      this.props.history.push('/house')
    }

    
  }

  render() {
      return (
        <SortingContainer>
          <Crests>
            <StyledImg src={gryffindor} alt="gryffindor crest" />
            <StyledImg src={hufflepuff} alt="hufflepuff crest" />
            <StyledImg src={slytherin} alt="slytherin crest" />
            <StyledImg src={ravenclaw} alt="ravenclaw crest" />
          </Crests>
          <Book>
            {
              this.state.questionNumber <= 5
              ?
              <Quiz questions={this.state.questions} questionNumber={this.state.questionNumber} handleSelection={this.handleSelection} />
              :
              <Button onClick={this.handleSorting}>
                Your House Awaits
              </Button>
            }
          </Book>
          <a
            className="wallpaper-link"
            href="https://harry-potter-sounds.ambient-mixer.com/images_template/7/5/a/75a04e9fe12e17379e429cf11bf9f298_full.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image from Harry Potter Sounds Ambient Mixer
          </a>
        </SortingContainer>
      )
  }
}


// ====================
// Styled Components
// ====================

const SortingContainer = styled.div`
  background-image: url(${studyhall});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & a.wallpaper-link {
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

const Book = styled.div`
  background-image: url(${book});
  width: 700px;
  height: 526px;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  background-position: center center;
  background-size: contain;
  align-self: center;
  margin-bottom: 0rem;
  background-repeat: no-repeat;
  cursor: url(${quill}), auto;

  & input {
    cursor: url(${quill}), auto;
  }
`;

const Crests = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  margin: 0 auto;
  height: 16vh;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 1rem;

  p {
    width: 25%;
    text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.8),
      -2px 3px 2px rgba(0, 0, 0, 0.7), -3px 4px 3px rgba(0, 0, 0, 0.6),
      -4px 4px 3px rgba(0, 0, 0, 0.5), -5px 5px 4px rgba(0, 0, 0, 0.4),
      -6px 5px 4px rgba(0, 0, 0, 0.3);
  }
`;

const StyledImg = styled.img`
  object-fit: contain;
  display: inline-block;
  width: 80px;
`;

const Button = styled.button`
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 700;
  border: 1px solid black;
  color: black;
  align-self: center;
  outline: none;
  background: wheat;
  padding: 20px;
  transition: all 0.3s ease-in;
  display: inline-block;

  &:hover {
    background: yellow;
    color: black;
    transform: translateY(-3px);
    box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3), -2px 3px 7px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: -1px 2px 6px rgba(0, 0, 0, 0.4), -2px 3px 6px rgba(0, 0, 0, 0.4);
  }
`;