import React, { useState } from "react";
import styled from "styled-components";
import {decode} from "html-entities"
import { nanoid } from "nanoid"

function Question(props) {


  const ans = props.q.answers || [];

  const handleClick = (answer) => {
    if(props.q.checked){
        return
    }
    props.handleSelectAnswer(props.id, answer)
  }

  const answerElements = ans.map((ans) => {
    let id = null;
    if(props.q.checked){
        if(props.q.correct === ans){
            id="correct"
        }
        else if(props.q.selected === ans){
            id="incorrect"
        }
        else{
            id="non-selected"
        }
    }
    return <button key={nanoid()} id={id} onClick={() => handleClick(ans)}>{ans}</button>
  })      
        
      

  return (
      <Container>
        <QuestionBox>
            <h2>{decode(props.q.question)}</h2>
            <Options>
               {decode(answerElements)}
            </Options>
        </QuestionBox>
        <Line></Line>
      </Container>
  )
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
  width: 70%;
  text-align: left;
  border: 1px solid white;
`

const Options = styled.div`
  display: flex;
  padding-block: 0.5rem;
  margin: 1rem;
  margin-left: 0;
  justify-content: start;
  button {
    border: 1px solid #563680;
    background-color: #563680;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.7rem;
    padding: 0.5rem;
    margin: 1rem;
    margin-bottom: 0;
  }
`;

export default Question;
