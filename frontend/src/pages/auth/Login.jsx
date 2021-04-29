// NPM Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
//Styling
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function AuthPage({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <div className="containerr">
            <Header as="h2" color="ui green header" textAlign="center">
              <Image src="https://www.linkpicture.com/q/icon_14.png" />
              Log-in to your account
            </Header>
          </div>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                as="a"
                inverted
                color="green"
                onClick={() => onSubmit({ email, password })}
              >
                <a href="/login">Login</a>
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="/signup">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
