import React from 'react'
import { createGlobalStyle, ThemeProvider as Root } from 'styled-components'
import theme from './theme'

const theme = theme

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
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: ${font};
    background-color: ${colors.cream};
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