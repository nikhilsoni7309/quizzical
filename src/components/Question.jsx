import React from 'react'
import styled from 'styled-components'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

function Question(props) {

  const answers = props.q.answers

  const handleClick = (answer) => {
    if(props.q.checked){
        return 
    }

    props.handleClickAnswer(props.id, answer)
  }

  const answerElements = answers.map((ans) => {
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
    return <button key={nanoid()} id={id} className={ans === props.q.selected ? 'answer Selected' : 'answer'} onClick={() => handleClick(ans)}>{decode(ans)}</button>
  })

  return (
    <Container>
      <h2>{decodeURI(props.q.question)}</h2>
      <Options>
        {answerElements}
      </Options>
    </Container>
  )
}

const Container = styled.div`
    border: 1px solid green;
    h2 {
        color: red;
        font-weight: bold;
    }
`

const Options = styled.div`
    display: flex;
    padding: 1rem;
    margin: 1rem;
    justify-content: space-between;
    div {
        border: 1px solid blue;
        border-radius: 0.7rem;
        padding: 0.5rem;
        margin: 1rem;
    }
`

export default Question
