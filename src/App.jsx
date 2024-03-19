import styled from "styled-components"
import './App.css'
import Frontpage from "./components/Frontpage"
import Question from "./components/Question"
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'
import { useEffect,useState } from "react"


function App() {

  const [gameStart, setGameStart] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const [correctAns, setCorrectAns] = useState(true)

  const shuffleArray = (arr) => arr.sort(() => Math.random()-0.10)

  useEffect(() => {
    
  })

  return (



    // <Frontpage />
    <Question />
  )
}

// Cartoon: https://opentdb.com/api.php?amount=10&category=32
// Anime: https://opentdb.com/api.php?amount=10&category=31
// Gadgets: https://opentdb.com/api.php?amount=10&category=30
// Animals: https://opentdb.com/api.php?amount=10&category=27
// Sports: https://opentdb.com/api.php?amount=10&category=21
// Mythology: https://opentdb.com/api.php?amount=10&category=20
// Mathematics: https://opentdb.com/api.php?amount=10&category=19
// Computers: https://opentdb.com/api.php?amount=10&category=18
// General Knowledge: https://opentdb.com/api.php?amount=10&category=9
// Science & Nature: https://opentdb.com/api.php?amount=10&category=17

export default App
