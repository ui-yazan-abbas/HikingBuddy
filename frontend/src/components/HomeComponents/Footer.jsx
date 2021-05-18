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
  Feed
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical color="green" style={{ padding: "2em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={7}>
           
              <Image
                size="small"
                src="https://www.linkpicture.com/q/imageedit_6_6679600314.png"
                href="/"
              />
               
              <p>
                Where hikers meet and share
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Our events</List.Item>
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
