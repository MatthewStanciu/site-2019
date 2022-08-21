import React from 'react'
import Head from 'next/head'
import ThemeProvider from '../theme'
import theme from '../theme/config'
import { default as data } from '../data.json'
const { name, title, description, url, img } = data

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap"
      rel="stylesheet"
    />
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <meta name="theme-color" content={theme.colors.red} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={url} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
