// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Segment, Container, Header, Button, Card } from "semantic-ui-react";
import NavHome from "../../components/HomeComponents/NavHome";
import Intro from "../../assets/intro3.mp4";

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
        <NavHome />
        <Container text textAlign="center">
          <Header
            as="h1"
            content="Where hikers share and meet"
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
          <a href="/signup">
            <Card
              color="green"
              centered
              as="h2"
              content="Join HikingBuddy"
              style={{
                fontSize: mobile ? "1.5em" : "1.7em",
                fontWeight: "normal",
                marginTop: mobile ? "0.5em" : "1.5em",
              }}
            />
          </a>
        </Container>
      </Segment>
    </>
  );
}
