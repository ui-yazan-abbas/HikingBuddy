// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Grid, Header, Image, Segment } from "semantic-ui-react";

export default function Feedback() {
  return (
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "The best place to find adventure buddies"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <b>Eduardo Alvarez Nowak</b>
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "If you love outdoors and enjoy nature,
              don't hesitate to join HikingBuddy!."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
              />
              <b>Károly Tóth</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
