import React from 'react'
import { createGlobalStyle, ThemeProvider as Root } from 'styled-components'
import config from './config'

export const theme = config

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    margin: 0;
    padding: ${theme.space[3]}px;
    position: relative;
    height: 100%;
    width: 100%;
    font-family: ${theme.font};
    background-color: ${theme.colors.cream};
    color: ${theme.colors.coffee};
  }
  ${theme.mediaQueries.dark} {
    body {
      background-color: ${theme.colors.coffee};
      color: ${theme.colors.cream};
    }
  }
`

const ThemeProvider = ({ children }) => (
  <Root theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </Root>
)

export default ThemeProvider
