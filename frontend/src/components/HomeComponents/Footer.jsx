// NPM Packages
import React from "react";
// Project styiling from semantic ui
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical color="blue" style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
          <Grid.Column width={7}>
          <Image
          size="small"
          src="https://www.linkpicture.com/q/logo5_5.png"
          href="/"
        />
            </Grid.Column>
            <Grid.Column width={3}>
              <p>
                For nature and mountain lovers, for lovers of safety and good
                company.
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Our events</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">We love nature</List.Item>
                <List.Item as="a">Best plans ever</List.Item>
              </List>
            </Grid.Column>  
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
