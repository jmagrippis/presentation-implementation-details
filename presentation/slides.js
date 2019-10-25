import React from 'react'
import { Slide, Text, Heading } from 'spectacle'
import { MDXProvider } from '@mdx-js/tag'

import components from './components'
import theme, { darkComponents } from './theme'

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={darkComponents}>
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
