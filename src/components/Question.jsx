import React from 'react'
import styled from 'styled-components'

function Question() {
  return (
    <Container>
      <h2>Earth is located in which galaxy?</h2>
      <Options>
        <div>milky way</div>
        <div>akash ganga</div>
        <div>akash yamuna</div>
        <div>coffee way</div>
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
