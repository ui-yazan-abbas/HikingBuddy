// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Container, Image, Menu, Button, Grid } from "semantic-ui-react";

export default function Footer() {
  return (
    <Menu text size="large">
      <Container>
      <Menu.Item position="left">
      

       
      
        <Image
        rounded
          size="tiny"
          src="https://www.linkpicture.com/q/logo5_5.png"
          href="/"
        />
        </Menu.Item>

        {/* This is commented because we will add more links when the page is advancing */}
        {/* <Menu.Item as="a">Connect</Menu.Item>
        <Menu.Item as="a">Events</Menu.Item> */}
        <Menu.Item position="right">
          <Button.Group>
            <Button as="a" inverted color="green">
              <a href="/login">Login</a>
            </Button>
            <Button.Or />
            <Button
              as="a"
              inverted
              color="blue"
              style={{ marginLeft: "0.5em" }}
            >
              <a href="/signup">Sign up</a>
            </Button>
          </Button.Group>
        </Menu.Item>
      
       
      </Container>
    </Menu>
  );
}
