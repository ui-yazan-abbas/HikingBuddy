// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Image, Grid, Header, Segment } from "semantic-ui-react";

export default function BlogPost() {
  return (
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
       <Grid.Row> 
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Sweden's top hiking trails include:
            </Header>
            <ul style={{ fontSize: "1.33em" }}>
              <li>- Kebnekaise</li>
              <li>- The Pilgrim Path St Olavsleden</li>

              <li>- Sörmland hiking trail</li>
              <li>- Sörmlandsleden</li>

              <li>- The King’s Trail (Kungsleden)</li>

              <li>- The Emigrant Trail (Utvandrarleden)</li>
              <li>- Skåneleden Trail</li>
            </ul>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kungsleden_trail.JPG/1200px-Kungsleden_trail.JPG"
            />
          </Grid.Column>
         </Grid.Row> 
      </Grid>
    </Segment>
  );
}
