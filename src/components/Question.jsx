import React from "react";
import styled from "styled-components";
import {decode} from "html-entities"

function Question(props) {
  console.log(props);

  const questionSet = props.questionArray.map((set, index) => {
    let allOptions = [...set.incorrect_answers, set.correct_answer]
    return (
      <div>
        <h2 key={index}>{decode(set.question)}</h2>
        <Options>
          {allOptions.map((set, index) => {
            return <button>{set}</button>;
          })}
        </Options>
        <Line></Line>
      </div>
    );
  });

  return (
      <Container>
        <QuestionBox>
          {questionSet}
        </QuestionBox>
        <PlayBtn>Check Answers</PlayBtn>
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #563680;
  font-family: cursive;
  background-color: #f6ecff;

`;

const QuestionBox = styled.div`
  padding: 2rem;
  text-align: left;
  width: 70rem;
`
const Line = styled.div`
  text-align: left;
  border: 1px solid white;
  margin-block: 1rem;
`

const Options = styled.div`
  display: flex;
  padding-block: 0.5rem;
  margin-block: 1rem;
  justify-content: start;
  button {
    border: 1px solid blue;
    background-color: #563680;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.7rem;
    padding: 0.5rem;
    margin: 1rem;
  }
`;

const PlayBtn = styled.button`
  color: #3b1472;
  font-weight: bold;
  font-family: cursive;
  font-size: large;
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #3b1472;
  cursor: pointer;

  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`

export default Question;
