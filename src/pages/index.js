import React from "react";
import styled from "styled-components";
import theme from "../theme/config";
import Layout from "../components/Layout";
import { Box, Flex, Heading, Text, Link } from "rebass";
import { Container } from "../components/Container";
import Project from "../components/Project";
import Icon from "@hackclub/icons";
import { services, projects, repos } from "../data.json";
import Repo from "../components/Repo";

const Header = styled(Container).attrs({ maxWidth: 72, px: 3, mb: 6 })`
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

  ${theme.mediaQueries.dark} {
    svg {
      color: ${theme.colors.lightBlue};
    }
  }

  h1 {
    line-height: 1.125;
  }
`;

// Hi, I’m Matthew, & I care about text wrapping a LOT
const Space = styled.span`
  display: inline;
  &:before {
    content: " ";
    ${theme.mediaQueries.sm} {
      content: "";
    }
  }
`;

const Portrait = styled.img`
  overflow: hidden;
  min-height: 18rem;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
  object-fit: cover;
  ${theme.mediaQueries.md} {
    min-height: 28rem;
  }
`;

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
);

const ProjectLink = styled(Link)`
  text-decoration: none;
  transition: ease-out color 0.125s;
  color: ${theme.colors.red};

  &:hover,
  &:focus {
    color: ${theme.colors.lightRed};
    transition: color 0.125s ease-in;
  }

  ${theme.mediaQueries.dark} {
    color: ${theme.colors.lightRed};

    &:hover,
    &:focus {
      color: ${theme.colors.red};
    }
  }
`;

const RepoGrid = styled(Box)`
  display: grid;
  grid-gap: 24px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default () => (
  <Layout>
    <Header>
      <Portrait src={require("../../static/bloomington-portrait.jpg")} />
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
          justifyContent={["center", null, "flex-start"]}
          mt={[2, 3]}
          mb={[3, 4]}
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

        <Text fontSize={[3, 4]} mb={3}>
          I’m a 20-year-old web developer from West Lafayette, IN. I write code,
          organize hackathons, and eat Chipotle. 🏳️‍🌈
        </Text>
        <Text fontSize={[3, 4]}>
          In high school, I did cool things like organize{" "}
          <ProjectLink target="_" href="https://windyhacks.com">
            Windy City Hacks
          </ProjectLink>{" "}
          & run a{" "}
          <ProjectLink target="_" href="https://hackclub.com">
            Hack Club
          </ProjectLink>{" "}
          at my high school. Now I'm continuing to grow at Purdue University.
          ✨🚀👁
        </Text>
      </Box>
    </Header>
    <Container maxWidth={54} mb={[4, 6]}>
      <Heading as="h2" textAlign="center" mb={4} fontSize={[5, 6]}>
        Selected Open Source
      </Heading>
      <RepoGrid>
        {repos.map((repo) => (
          <Repo {...repo} key={repo.url} />
        ))}
      </RepoGrid>
    </Container>
    <Container maxWidth={48}>
      <Heading as="h2" textAlign="center" mb={4} fontSize={[5, 6]}>
        Previous Projects
      </Heading>
      {projects.map((project) => (
        <Project {...project} key={project.img} />
      ))}
    </Container>
  </Layout>
);
