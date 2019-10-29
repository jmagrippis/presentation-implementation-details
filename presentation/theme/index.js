import * as React from 'react'
import { Slide, Text, Heading } from 'spectacle'

import createTheme from '../../createTheme'

const colors = {
  primary: '#323639',
  secondary: '#EFE9F4',
  tertiary: '#26C485',
  quaternary: '#A3E7FC',
}

const components = {
  heading: {
    h1: {
      fontSize: '4rem',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '3.5rem',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '3rem',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '2.5rem',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
    },
  },
  codePane: {
    fontSize: '2rem',
  },
}

export const darkComponents = {
  ...components,
  h2: ({ children }) => (
    <Heading
      size={2}
      textColor={theme.screen.colors.secondary}
    >
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading
      size={3}
      textColor={theme.screen.colors.secondary}
    >
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading
      size={4}
      textColor={theme.screen.colors.secondary}
    >
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading
      size={5}
      textColor={theme.screen.colors.secondary}
    >
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading
      size={6}
      textColor={theme.screen.colors.secondary}
    >
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text textColor={theme.screen.colors.secondary}>
      {children}
    </Text>
  ),
}

const errorRed = '#C03221'

export const errorComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={2} textColor={errorRed}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor={errorRed}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={errorRed}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={errorRed}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={errorRed}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={errorRed}>
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text textColor={errorRed} textFont="Fira Code">
      <strong style={{ fontSize: '4rem' }}>
        {children}
      </strong>
    </Text>
  ),
}

const theme = createTheme(
  colors,
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary,
      },
      pacmanBottom: {
        background: colors.quaternary,
      },
      point: {
        borderColor: colors.quaternary,
      },
    },
    components: darkComponents,
  }
)

export default theme
