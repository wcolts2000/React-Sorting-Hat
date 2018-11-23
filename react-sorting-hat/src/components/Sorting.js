import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import studyhall from "../images/study.jpg";
import book from "../images/book.png";
import quill from "../images/quill.svg";

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
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  background-position: center center;
  background-size: contain;
  align-self: center;
  margin-bottom: 5rem;
  background-repeat: no-repeat;
  cursor: url(${quill}), auto;

  & input {
    cursor: url(${quill}), auto;
  }
`;

const Question = styled.div`
  width: 50%;
  font-size: 1.2rem;
  color: darkred;
  font-family: "Amita", cursive;
`;

const Form = styled.form`
  width: 48%;
`;

const Input = styled.input`
  font-size: 1.8rem;
`;

export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      huffelpuff: 0,
      ravenclaw: 0,
      grifindoor: 0,
      slitherin: 0
    };
  }
  render() {
    return (
      <SortingContainer>
        <Book>
          <Question>
            What will you answer? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde cum amet similique iste dolore architecto
            distinctio libero consectetur dicta voluptatum corporis magni
            impedit a, doloribus velit incidunt officia? Earum, reprehenderit!
          </Question>
          <Form>
            <Input type="radio" name="gender" value="male" checked /> Male
            <br />
            <Input type="radio" name="gender" value="female" /> Female
            <br />
            <Input type="radio" name="gender" value="other" /> Other
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
