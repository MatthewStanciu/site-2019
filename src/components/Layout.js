import React from 'react'
import Helmet from 'react-helmet'
import { theme } from '../theme'
import ThemeProvider from '../theme'

export const Layout = ({ children }) => (
  <ThemeProvider>
    <Helmet title="TinyDocs">
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content={theme.colors.primary} />
    </Helmet>
    {children}
  </ThemeProvider>
)
