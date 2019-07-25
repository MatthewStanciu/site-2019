import React from 'react'
import styled from 'styled-components'
import { Card, Text, Heading, Box } from 'rebass'
import theme from '../theme/config'

export const GridItem = styled(Card).attrs({
  bg: 'white',
  width: 1,
  my: [3, 4, 5]
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
  line-height: 0;
  text-decoration: none;
  transition: ease-out all 0.0625s;
  &:hover,
  &:focus {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.125);
    transform: translateY(-6px);
  }
  ${theme.mediaQueries.md} {
    flex-direction: row;
    &:nth-child(even) {
      flex-direction: row-reverse;
      &:hover,
      &:focus {
        transform: translateX(6px);
      }
    }
    &:nth-child(odd) {
      text-align: right;
      &:hover,
      &:focus {
        transform: translateX(-6px);
      }
    }
    picture {
      max-width: 45% !important;
    }
  }
  ${theme.mediaQueries.lg} {
    position: relative;
    &:nth-child(even) {
      right: -2rem;
    }
    &:nth-child(odd) {
      left: -2rem;
    }
  }
  picture {
    width: 100%;
    max-width: 100%;
    max-height: 12rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const GridItemBanner = styled(Box).attrs({
  fontSize: 3,
  color: 'coffee',
  bg: 'lightBlue',
  p: 3
})`
  display: block;
  line-height: 1;
  flex: 1 1 auto;
  flex-shrink: none;
  ${theme.mediaQueries.md} {
    min-width: 24rem;
  }
  ${theme.mediaQueries.dark} {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.cream};
  }
`

const Project = ({ name, desc, url, img, imgDark }) => (
  <GridItem as="a" href={url} target="_blank">
    <picture>
      {imgDark && (
        <source
          srcset={require(`../../static/${imgDark}`)}
          media="(prefers-color-scheme: dark)"
        />
      )}
      <img src={require(`../../static/${img}`)} alt={name} />
    </picture>
    <GridItemBanner>
      <Heading as="h3" mb={2}>
        {name}
      </Heading>
      <Text>{desc}</Text>
    </GridItemBanner>
  </GridItem>
)

export default Project
