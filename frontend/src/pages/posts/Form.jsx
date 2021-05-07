import React from "react";
import { Button, Form, Grid, Segment, Container } from "semantic-ui-react";

export default function PostForm({ onSubmit }) {
  const [postLocation, setPostLocation] = React.useState("");
  const [body, setBody] = React.useState("");
  const [postDistance, setPostDistance] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      postLocation: postLocation,
      body: body,
      postDistance: postDistance,
    });

    // Clear the input field
    setPostLocation("");
    setBody("");
    setPostDistance("");
  };

  return (
    <Container>
      <Grid.Column only="widescreen" widescreen={10}>
        <Segment inverted color="blue">
          <h2>Enjoyed a hike? Share and recommend!</h2>
          {/* <h4 className="card-title">Make a new post</h4> */}
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Field>
                <Form.Input
                  fluid
                  label="Location/Trail name"
                  placeholder="Håga Trail"
                  value={postLocation}
                  onChange={(e) => setPostLocation(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  label="Distance KM"
                  placeholder="35"
                  value={postDistance}
                  onChange={(e) => setPostDistance(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Form.Input
                fluid
                label="Recommended hiking"
                placeholder="I recommend because..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Field>

            <Button
              as="a"
              inverted
              color="blue"
              onClick={handleSubmit}
              type="submit"
            >
              Post
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Container>
  );
}
