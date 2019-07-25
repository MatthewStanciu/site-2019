import React from 'react'
import styled from 'styled-components'
import theme from '../theme/config'
import { Box, Heading } from 'rebass'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Portrait } from '../components/Portrait'

const Header = styled(Container).attrs({ maxWidth: 72, px: 3, mb: [5, 6] })`
  display: grid;
  grid-gap: 32px;
  text-align: center;

  ${theme.mediaQueries.md} {
    grid-gap: 48px;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  h1 {
    line-height: 1.125;
  }
`

// Hi, I’m Matthew, & I care about text wrapping a LOT
const Space = styled.span`
  display: inline;
  &:before {
    content: ' ';
    ${theme.mediaQueries.sm} {
      content: '';
    }
  }
`

export default () => (
  <Layout>
    <Header>
      <Portrait src={require('../../static/portrait.jpg')} />
      <Box>
        <Heading
          as="h1"
          color="red"
          mt={[null, 3, 4]}
          fontSize={[6, null, null, 7]}
        >
          Hi, I’m<Space>&nbsp;</Space>
          Matthew.
        </Heading>
      </Box>
    </Header>
  </Layout>
)
