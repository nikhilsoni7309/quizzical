import React, { useEffect, useState } from 'react'
import styled from "styled-components"


function Frontpage(props) {
  const [selectedCategory, setSelectedCategory] = useState("9");

  const handleCategoryChange = (event) => {
    const category = event.target.value
    setSelectedCategory(category);
    props.onCategoryChange(category);
  }

  return (
    <Main>
        <Heading>Quizzical</Heading>
        <Description>Test your knowledge!😎</Description>
        <StartBtn onClick={props.start}>Start Quiz</StartBtn>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="9">General Knowledge</option>
            <option value="27">Animals</option>
            <option value="21">Sports</option>
            <option value="17">Science & Nature</option>
            <option value="32">Cartoons</option>
            <option value="30">Gadgets</option>
            <option value="31">Anime</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
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
