import { createGlobalStyle } from 'styled-components'

const colors = {
    cream: '#EFE3D5',
    red: '#DB3847',
    blue: '#406FC9',
    lightBlue: '#00A0D4',
    turquoise: '#1FA49F'
}

const font = 'IBM Plex Sans'

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72, 96]

export const theme = {
    colors,
    font,
    space,
    fontSizes
}

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