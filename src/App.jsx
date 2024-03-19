import styled from "styled-components"
import './App.css'
import Frontpage from "./components/Frontpage"
import Question from "./components/Question"
import { useEffect, useState } from "react"



function App() {

  const [questions, setQuestions] = useState([])



  useEffect(()=>{
    const startQuiz = async() => {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=9");
      const data = await res.json();
      setQuestions(data.results);
    }
    startQuiz();
  },[])



  return (
    <Main>
      {/* <Frontpage start={startQuiz} /> */}
      <Question questionArray={questions} />
    </Main>
  )
}

const Main = styled.div`
  width: 100vw;
`

export default App
