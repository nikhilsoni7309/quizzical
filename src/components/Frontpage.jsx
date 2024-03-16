import React from 'react'
import styled from "styled-components"


function Frontpage() {
  return (
    <Main>
        <Heading>Quizzical</Heading>
        <Description>Test your knowledge!😎</Description>
        <StartBtn>Start Quiz</StartBtn>
        <Select>
            <option value="">General Knowledge</option>
            <option value="">Animals</option>
            <option value="">Sports</option>
            <option value="">Science & Nature</option>
            <option value="">Cartoons</option>
            <option value="">Gadgets</option>
            <option value="">Anime</option>
            <option value="">Computers</option>
            <option value="">Mathematics</option>
            <option value="">Mythology</option>
        </Select>
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #563680;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Heading = styled.h1`
  color: white;
  font-family: cursive;
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.1rem;

  animation-name: changeColor;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes changeColor {
    0% {color: #f2ff00;}
    50% {color: #00fff7;}
    100% {color: #4dff01;}
  }

`
const Description = styled.h2`
  color: white;
  margin: 1rem;
  font-family: cursive;
`
const StartBtn = styled.button`
  color: white;
  font-weight: bold;
  font-family: cursive;
  font-size: large;
  background-color: #3b1472;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid white;
  cursor: pointer;

  &:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`

const Select = styled.select`
    padding: 0.5rem;
    margin: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid white;
    border-radius: 1rem;
    background-color: white;
    color: #3b1472;
    text-align: center;

    option {
        color: white;
        background-color: #3b1472;
    }
`

export default Frontpage
