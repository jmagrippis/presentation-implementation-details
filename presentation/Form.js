import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import {
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import ErrorOutline from '@material-ui/icons/ErrorOutline'
import styled from 'styled-components'

const isValid = (username) => username.length > 3

export const Form = ({ className }) => {
  const [username, setUsername] = useState('')

  return (
    <FormControl className={className}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input
        id="username"
        value={username}
        onChange={({ currentTarget }) => {
          setUsername(currentTarget.value)
        }}
        error={!username}
        endAdornment={
          <InputAdornment position="end">
            {isValid(username) ? (
              <CheckCircleOutline
                style={{ color: '#02C39A' }}
                titleAccess="username is valid"
              />
            ) : (
              <ErrorOutline
                color="error"
                titleAccess="username is not valid"
              />
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
export default Form
