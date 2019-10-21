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
        endAdornment={
          <InputAdornment position="end">
            {username ? (
              <CheckCircleOutline style={{ color: '#02C39A' }} />
            ) : (
              <ErrorOutline color="error" />
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
export default Form
