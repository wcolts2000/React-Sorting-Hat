import React from 'react'
import styled from 'styled-components';
import quill from '../images/quill.svg';

function Quiz({questions, questionNumber, handleSelection}) {
  const questionObj = Object.values(questions)[questionNumber];
  const houses = ['ravenclaw', 'gryffindor', 'hufflepuff', 'slytherin'];
  return (
    <>
      <Question>
        {
          questionObj.question
        }
      </Question>
      <Form onChange={handleSelection} name="answer" id="form">
        {houses.map((house, index) => (
          <FormGroup key={index}>
            <Input
              type="radio"
              checked={false}
              name="answer"
              id={house}
              className="form-input"
            />
            <FormLabel
              htmlFor={house}
              className="form-label"
            >
              <Span className="radio-button" />
              { questionObj[house[0]] }
            </FormLabel>
          </FormGroup>
        ))}
        
      </Form>
    </>
  )
}

export default Quiz


// ====================
// Styled Components
// ====================

const Question = styled.div`
  width: 45%;
  font-size: 1.2rem;
  color: darkred;
  font-family: 'Amita', cursive;
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
  font-family: 'Amita', cursive;
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
  }
`;


