import React from "react";
import styled from "styled-components";
import { Card, Text, Heading, Box, Flex } from "rebass";
import Icon from "@hackclub/icons";
import theme from "../theme/config";

export const GridItem = styled(Card).attrs({
  bg: "red",
  width: 1,
  p: [2, 3],
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
  background-color: ${theme.colors.red};
  color: ${theme.colors.cream};
  text-decoration: none;
  transition: ease-out all 0.0625s;
  &:hover,
  &:focus {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.125);
    transform: translateY(-6px);
  }
`;

const Repo = ({ name, desc, url }) => (
  <GridItem as="a" href={url} target="_blank">
    <Heading as="h3" fontSize={4} mb={1}>
      {name}
    </Heading>
    <Text>{desc}</Text>
    <Flex mt={2} alignItems="center">
      <Icon glyph="github" size={24} />
      <Text pl={2} fontSize={1}>
        {url.split(".com/")[1]}
      </Text>
    </Flex>
  </GridItem>
);

export default Repo;
