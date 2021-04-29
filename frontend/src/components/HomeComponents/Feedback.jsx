// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Grid, Header, Image, Segment } from "semantic-ui-react";

export default function Feedback() {
  return (
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "The best place to find adventure buddies"
            </Header>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <b>Eduardo </b>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "If you love the outdoors sports and enjoy nature in a safe way,
              don't hesitate to join HikkingBuddy!."
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
