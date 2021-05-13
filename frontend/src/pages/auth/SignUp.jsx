// NPM Packages
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../../services/Auth";
import SgnupWithGoogle from "../../components/sgnupwithGoogle";
import LogoutButton from "../../components/Logout";
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

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
    history.push("/feed");
  };
  return (
    <div className="signup">
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <div className="containerr">
            <Header as="h2" color="ui green header" textAlign="center">
              <Image src="https://www.linkpicture.com/q/icon_14.png" /> Join us
              and start sharing!
            </Header>
          </div>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                onClick={(e) => register({ name, email, password })}
              >
                Join us now!
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href="/login">Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
