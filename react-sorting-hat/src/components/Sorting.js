import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import studyhall from "../images/study.jpg";
import book from "../images/book.png";
import quill from "../images/quill.svg";
import './Sorting.css'
import gryffindor from '../images/gryffindorCrest.png';
import hufflepuff from '../images/hufflepuffCrest.png';
import ravenclaw from '../images/ravenclawCrest.png';
import slytherin from '../images/slytherinCrest.png';


const SortingContainer = styled.div`
  background-image: url(${studyhall});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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

const Question = styled.div`
  width: 45%;
  font-size: 1.2rem;
  color: darkred;
  font-family: "Amita", cursive;
`;

const Form = styled.form`
  width: 48%;
`;

const Input = styled.input`
  display: none;
`;

const FormGroup = styled.div`
  width: 100%;
  display: inline-block;
`;

const FormLabel = styled.label`
  font-size: 1.4rem;
  font-family: "Amita", cursive;
  color: darkred;
  position: relative;
  padding-left: 2.5rem;
  text-decoration: underline;
  cursor: url(${quill}), auto;
`;

const Span = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border: 5px solid darkred;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0.5rem;
  top: .5rem;

  &::after {
    height: .5rem;
    width: .5rem;
    content: "";
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: darkred;
    transition: opacity 0.2s;
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

const Points = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  margin: 0 auto;
  height: 5vh;
  font-size: 1.4rem;
  color: yellow;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      hufflepuff: 0,
      ravenclaw: 0,
      gryffindor: 0,
      slytherin: 0
    };
  }
  render() {
    return (
      <SortingContainer>
        <Crests>
          <StyledImg src={gryffindor} alt="gryffindor crest"/>
          <StyledImg src={hufflepuff} alt="hufflepuff crest"/>
          <StyledImg src={slytherin} alt="slytherin crest"/>
          <StyledImg src={ravenclaw} alt="ravenclaw crest"/>
        </Crests>
        <Points>
          <p>{this.state.gryffindor}</p>
          <p>{this.state.hufflepuff}</p>
          <p>{this.state.slytherin}</p>
          <p>{this.state.ravenclaw}</p>
        </Points>
        <Book>
          <Question>
            What will you answer? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde cum amet similique iste dolore architecto
            distinctio libero consectetur dicta voluptatum corporis magni
            impedit a, doloribus velit incidunt officia? Earum, reprehenderit!
          </Question>
          <Form>
            <FormGroup>
              <Input type="radio" name="answer" id="answer1" className="form-input" />
              <FormLabel htmlFor="answer1" className="form-label">
                <Span className="radio-button"></Span>
                Answer 1 blah blah blah blah
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <Input type="radio" name="answer" id="answer2"className="form-input" />
              <FormLabel htmlFor="answer2" className="form-label">
                <Span className="radio-button"></Span>
                Answer 2
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <Input type="radio" name="answer" id="answer3" className="form-input" />
              <FormLabel htmlFor="answer3" className="form-label">
                <Span className="radio-button"></Span>
                Answer 3
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <Input type="radio" name="answer" id="answer4" className="form-input" />
              <FormLabel htmlFor="answer4" className="form-label">
                <Span className="radio-button"></Span>
                Answer 4
              </FormLabel>
            </FormGroup>
          </Form>
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
    );
  }
}
