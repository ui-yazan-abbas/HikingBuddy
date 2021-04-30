// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Image, Grid, Header, Segment } from "semantic-ui-react";

export default function BlogPost() {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Sweden's top hiking trails include:
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <li>Kebnekaise</li>
              <li>Sörmlandsleden – Sörmland hiking trail</li>
              <li>The Pilgrim Path St Olavsleden</li>
              <li>The Emigrant Trail (Utvandrarleden)</li>
              <li>Skåneleden Trail</li>
              <li> The King’s Trail </li>
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="medium"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kungsleden_trail.JPG/1200px-Kungsleden_trail.JPG"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
