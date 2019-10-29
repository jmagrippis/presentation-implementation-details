import React from 'react'
import { Slide, Text, Heading } from 'spectacle'
import { MDXProvider } from '@mdx-js/tag'

import components from './components'
import theme, {
  darkComponents,
  errorComponents,
} from './theme'

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={darkComponents}>
      {children}
    </MDXProvider>
  </Slide>
)

export const ErrorSlide = ({ children, ...rest }) => (
  <Slide {...rest} bgColor="#545E75">
    <MDXProvider components={errorComponents}>
      {children}
    </MDXProvider>
  </Slide>
)

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>
      {children}
    </MDXProvider>
  </Slide>
)

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  </Slide>
)
