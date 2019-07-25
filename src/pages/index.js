import React from 'react'
import styled from 'styled-components'
import theme from '../theme/config'
import { Box, Flex, Heading } from 'rebass'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import Icon from '@hackclub/icons'

const Header = styled(Container).attrs({ maxWidth: 72, px: 3, mb: [5, 6] })`
  display: grid;
  grid-gap: 32px;
  text-align: center;

  ${theme.mediaQueries.md} {
    grid-gap: 48px;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  ${theme.mediaQueries.lg} {
    svg {
      width: 64px;
      height: 64px;
    }
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

const Portrait = styled.img`
  overflow: hidden;
  min-height: 18rem;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
  object-fit: cover;
  ${theme.mediaQueries.md} {
    min-height: 28rem;
  }
`

const Service = ({ href, service, ...props }) => (
  <Box
    as="a"
    target="_blank"
    rel="noopener"
    href={href}
    mr={3}
    color={theme.colors.blue}
    aria-label={service}
    children={<Icon glyph={service} size={48} />}
    {...props}
  />
)

const services = {
  github: 'MatthewStanciu',
  twitter: 'MatthewStanciu',
  instagram: 'matthewstanciu'
}

export default () => (
  <Layout>
    <Header>
      <Portrait src={require('../../static/portrait.jpg')} />
      <Box>
        <Heading
          as="h1"
          color="red"
          mt={[null, 3, 4]}
          fontSize={[6, null, 7, 9]}
        >
          Hi, I’m<Space>&nbsp;</Space>
          Matthew.
        </Heading>
        <Flex
          flexWrap="wrap"
          justifyContent={['center', null, 'flex-start']}
          mt={[2, 3]}
        >
          {Object.entries(services).map(([service, username]) => (
            <Service
              key={service}
              service={service}
              href={`https://${service}.com/${username}`}
            />
          ))}
          <Service service="email" href="mailto:matthew@matthewstanciu.me" />
        </Flex>
      </Box>
    </Header>
  </Layout>
)
