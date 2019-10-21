import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import { Form } from './Form'

const Container = styled.div`
  background-color: #f5e5fc;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 1rem !important;
  }
`

class ClassForm {}

export const GuessTheType = () => {
  const [firstTypeRevealed, setFirstTypeRevealed] = useState(false)
  const [secondTypeRevealed, setSecondTypeRevealed] = useState(false)

  return (
    <Container>
      <FormContainer>
        <Form />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFirstTypeRevealed(true)}
          tabindex="-1"
        >
          {firstTypeRevealed ? typeof Form : 'Reveal `typeof`'}
        </Button>
      </FormContainer>
      <FormContainer>
        <Form />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSecondTypeRevealed(true)}
          tabindex="-1"
        >
          {secondTypeRevealed ? typeof ClassForm : 'Reveal `typeof`'}
        </Button>
      </FormContainer>
    </Container>
  )
}

export default GuessTheType
