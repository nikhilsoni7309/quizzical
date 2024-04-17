import styled from "styled-components";
import "./App.css";
import Frontpage from "./components/Frontpage";
import Question from "./components/Question";
import { useEffect, useState } from "react";
import { decode } from "html-entities";
import { BeatLoader } from "react-spinners";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const fetchQuestions = async () => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`
    );
    const data = await res.json();
    console.log(data);
    let questionArray = [];
    data.results.forEach((question) => {
      questionArray.push({
        id: nanoid(),
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
        question: question.question,
        correct: question.correct_answer,
        selected: null,
        checked: false,
      });
    });
    setLoading(false);
    setQuestions(questionArray);
  };

  useEffect(() => {
    console.log("hello");
    if (gameStart === true) {
      fetchQuestions();
    }
  }, [gameStart]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCheck = () => {
    let selected = true;
    questions.map((question) => {
      if (question.selected === null) {
        return;
      }

      setQuestions((questions) =>
        questions.map((question) => {
          return { ...question, checked: true };
        })
      );

      setChecked(true);
      let correct = 0;
      questions.forEach((question) => {
        if (question.correct === question.selected) {
          correct += 1;
        }
      });
      setCorrectAns(correct);
    });
  };

  const handleSelectAnswer = (id, answer) => {
    setQuestions((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  };

  const questionElements = questions
    ? questions.map((question) => {
        return (
          <Question
            key={question.id}
            q={question}
            id={question.id}
            handleSelectAnswer={handleSelectAnswer}
          />
        );
      })
    : [];

  function start() {
    setGameStart((prev) => !prev);
  }

  function handlePlayAgain() {
    setLoading(true);
    fetchQuestions();
    setChecked(false);
  }

  return (
    <Container>
      {gameStart ? (
        loading === true ? (
          <BeatLoader
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e8d7f7",
            }}
            color="#3b1472"
          />
        ) : (
          <Main>
            {questionElements}
            <ResultBox>
              {checked && <p>Correct Answers: {correctAns}/10 </p>}
              {questionElements.length > 0 ? (
                <button onClick={checked ? handlePlayAgain : handleCheck}>
                  {checked ? "Play Again" : "Check Answers"}
                </button>
              ) : (
                ""
              )}
            </ResultBox>
          </Main>
        )
      ) : (
        <Frontpage start={start} onCategoryChange={handleCategoryChange} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
const Main = styled.div`
  width: 100%;
`;
const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #563680;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: cursive;
    color: white;
  }

  button {
    color: #3b1472;
    font-weight: bold;
    font-family: cursive;
    font-size: large;
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    border: 2px solid #3b1472;
    cursor: pointer;

    &:active {
      box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
    }
    &:hover {
      background-color: #f6ecff;
    }
  }
`;

export default App;
