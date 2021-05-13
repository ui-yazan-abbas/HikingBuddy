// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
// import Intro from "../../assets/video.mp4";
// import Intro from "../../assets/intro3.mp4";

import Intro from "../../assets/video-2.mp4";

export default function IntroHome(mobile) {
  const introVid = Intro;
  return (
    <>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 400, padding: "1em 0em" }}
        vertical
      >
        <video autoPlay loop muted className="video">
          <source src={introVid} typer="video/mp4" />
        </video>
        <Container text textAlign="center">
          {/*  <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> */}
          <Header
            as="h1"
            content="Hiking tips and events in one place"
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em",
            }}
          />

          <Header
            as="h2"
            content="Do you love nature and hiking?"
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
            }}
          />
          <Button as="a" color="green" size="huge">
            <a href="/signup"> Find hiking buddies and join a hike</a>
            <Icon name="right arrow" />
          </Button>
        </Container>
      </Segment>
    </>
  );
}
