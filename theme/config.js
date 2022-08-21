const colors = {
  cream: '#EFE3D5',
  coffee: '#1c140a',
  red: '#DB3847',
  lightRed: '#F75250',
  blue: '#406FC9',
  lightBlue: '#00A0D4'
}

const font = '"IBM Plex Sans", system-ui, Roboto, sans-serif'

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72, 96]
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const mediaQueries = {
  sm: '@media (min-width: 32em)',
  md: '@media (min-width: 48em)',
  lg: '@media (min-width: 64em)',
  xl: '@media (min-width: 80em)',
  dark: '@media (prefers-color-scheme: dark)'
}

const theme = {
  colors,
  font,
  mediaQueries,
  fontSizes,
  space
}

export default theme
