// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";

export default function BlogPost() {
  return (
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Top hiking routes in Sweden
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Looking for top hiking routes in Sweden? Well-marked paths, easy to
          difficult hikes and superb natural surroundings – here are the
          classics you just have to hike.
        </p>
        <Button as="a" size="large" inverted color="green">
          <a href="https://visitsweden.com/what-to-do/nature-outdoors/hiking/top-hiking-routes-sweden/">
            Read More
          </a>
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">More Trails</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Hiking in Sweden – an adventure from north to south
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Sweden is a hiking paradise. Find your favourite trail – from the
          rugged King’s Trail in the north to undulating forests and plains of
          the south.
        </p>
        <Button as="a" size="large" inverted color="green">
          <a href="https://visitsweden.com/what-to-do/nature-outdoors/hiking/hiking/">
            Read More
          </a>
        </Button>
      </Container>
    </Segment>
  );
}
