import React from "react";
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
import Nature from "../../assets/nature.mp4";

export default function PostForm({ onSubmit, post }) {
  const [postLocation, setPostLocation] = React.useState("");
  const [body, setBody] = React.useState("");
  const [postDistance, setPostDistance] = React.useState("");
  const [postImageUrl, setImageUrl] = React.useState("");
  const videoSrc = Nature;

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
  };

  //modal
  const [open, setOpen] = React.useState(false);

  return (
    <Card centered margin>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button inverted color="green">
            Recommend a Hike!
          </Button>
        }
      >
        <Header as="h3" dividing basic color="green">
          <h2>Enjoyed a hike? Share and recommend!</h2>
        </Header>

        <Segment>
          <Modal.Header></Modal.Header>
          {/* <h4 className="card-title">Make a new post</h4> */}
          <Form success>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Location or Trail</label>
                <Form.Input
                  fluid
                  placeholder="Håga Trail"
                  value={postLocation}
                  onChange={(e) => setPostLocation(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Distance in km</label>
                <Form.Input
                  placeholder="35"
                  value={postDistance}
                  onChange={(e) => setPostDistance(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Recommended hiking</label>
              <Form.Input
                fluid
                placeholder="I recommend because..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Upload image or video</label>
              <Image src={postImageUrl} />

              <ImgUpload className="profile" uploadImg={change} />
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

        <Modal.Actions basic color="green">
          <Button onClick={() => setOpen(false)} basic color="green">
            See feed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    </Card>
  );
}
