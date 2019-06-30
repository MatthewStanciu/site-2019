import React from 'react'
import Helmet from 'react-helmet'
import ThemeProvider from '../theme'
import styled from 'styled-components'
import { Flex } from 'rebass'
import '../static/fonts.css'

const BorderWrapper = styled(Flex).attrs({
  as: 'main',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 3,
  m: 3
})`
  position: relative;
  height: 100%;
`

export const Layout = ({ children }) => (
  <ThemeProvider>
    <Helmet title="Matthew Stanciu">
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
    </Helmet>
    <BorderWrapper>{children}</BorderWrapper>
  </ThemeProvider>
)
