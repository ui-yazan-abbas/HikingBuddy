import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

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
    <div className="card">
      <div className="card-body">
        <h2>Enjoyed a hike? Share and recommend!</h2>
        {/* <h4 className="card-title">Make a new post</h4> */}
        <div>
          <div className="form-group">
            <Form>
              <p>Location/Trail name</p>
              <Form.Field>
                <input
                  className="form-control"
                  placeholder="Håga Trail"
                  value={postLocation}
                  onChange={(e) => setPostLocation(e.target.value)}
                />
              </Form.Field>

              <p>Distance in km</p>
              <Form.Field>
                <Input
                  placeholder="35"
                  label={{ basic: true, content: "km" }}
                  labelPosition="right"
                  value={postDistance}
                  onChange={(e) => setPostDistance(e.target.value)}
                />
              </Form.Field>

              <Form.Field>
                <input
                  className="form-control"
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
          </div>
        </div>
      </div>
    </div>
  );
}
