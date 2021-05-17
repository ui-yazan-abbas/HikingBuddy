import React from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Form,
  Segment,
  Header,
  Modal,
  Icon,
  Card,
  Image,
} from "semantic-ui-react";
import ImgUpload from "./ImgUpload";

export default function PostForm({ onSubmit, post }) {
  const [postLocation, setPostLocation] = React.useState("");
  const [body, setBody] = React.useState("");
  const [postDistance, setPostDistance] = React.useState("");
  const [postImageUrl, setImageUrl] = React.useState("");

  const change = ({ target: { value } }) => {
    setImageUrl(value);
  };

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      postLocation: postLocation,
      body: body,
      postDistance: postDistance,
      imageUrl: postImageUrl,
    });

    // Clear the input field
    setPostLocation("");
    setBody("");
    setPostDistance("");
    setImageUrl("");
  };
  // to direct to feed after post submitted
  const history = useHistory();
  const redirect = () => {
    history.push("/feed");
  };

  // to close a Recommed hiking form
  const closeForm = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Card centered margin>
      <Modal
        className="modal"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button inverted color="green">
            Recommend a Hike
          </Button>
        }
      >
        <Header as="h3" dividing basic color="green">
          <h3>
            <b>Enjoyed a hike? Recommend and share!</b>
          </h3>
        </Header>

        {/* <h4 className="card-title">Make a new post</h4> */}

        <Modal.Content>
          <Modal.Description>
            <Form success>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Location or Trail</label>
                  <Form.Input
                    fluid
                    placeholder="Håga Trail"
                    value={postLocation}
                    onChange={(e) => setPostLocation(e.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Distance in km</label>
                  <Form.Input
                    placeholder="35"
                    value={postDistance}
                    onChange={(e) => setPostDistance(e.target.value)}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field required>
                <label>About my hike (250 characters max)</label>
                <Form.Input
                  fluid
                  maxLength="250"
                  placeholder="I recommend because..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Upload image</label>
                <Image src={postImageUrl} />

                <ImgUpload className="profile" uploadImg={change} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            as="a"
            inverted
            color="blue"
            onClick={() => {
              handleSubmit();
              closeForm();
              redirect();
            }}
            type="submit"
          >
            Post <Icon name="chevron right" />
          </Button>

          <Button
            onClick={() => setOpen(false)}
            as="a"
            inverted
            color="red"
            type="submit"
          >
            Cancel <Icon name="remove" />
          </Button>
        </Modal.Actions>
      </Modal>
    </Card>
  );
}
