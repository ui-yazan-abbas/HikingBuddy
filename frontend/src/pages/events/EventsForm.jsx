import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message,
  Icon,
  Image,
  Modal,
  Header,
  Card,
  Grid,
  Label,
} from "semantic-ui-react";

export default function EventsForm({ onSubmit }) {
  const [trailName, setTrailName] = React.useState("");
  const [eventDuration, setEventDuration] = React.useState("");
  const [eventDistance, setEventDistance] = React.useState("");
  const [eventDifficulty, setEventDifficulty] = React.useState("");
  const [maxNum, setMaxNum] = React.useState("");
  const [meetPoint, setMeetPoint] = React.useState("");
  const [trailHyperlink, setTrailHyperlink] = React.useState("");
  const [body, setBody] = React.useState("");
  const [roomName, setRoomName] = React.useState("");

  //Modal
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      trailName: trailName,
      eventDuration: eventDuration,
      eventDistance: eventDistance,
      eventDifficulty: eventDifficulty,
      maxNum: maxNum,
      meetPoint: meetPoint,
      trailHyperlink: trailHyperlink,
      body: body,
      roomName: roomName,
    });

    // Clear the input field
    setTrailName("");
    setEventDuration("");
    setEventDistance("");
    setEventDifficulty("");
    setMaxNum("");
    setMeetPoint("");
    setTrailHyperlink("");
    setBody("");
    setRoomName("");
  };
  // to direct to feed after post submitted
  const history = useHistory();
  const redirect = () => {
    history.push("/events");
  };
  // to close a Recommed hiking form
  const closeForm = () => setOpen(false);

  return (
    <Card centered margin>
      <Modal
        className="modal"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button as="a" inverted color="green" type="submit">
            Create a Hiking Event
          </Button>
        }
      >
        <Header as="h3" dividing basic color="green">
          <h3>
            {" "}
            <b>Create Your Hiking Event</b>
          </h3>
        </Header>

        <Modal.Content image scrolling>
          <Image
          rounded
            size="medium"
            src="https://images.unsplash.com/photo-1464198016405-33fd4527b89d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1292&q=80"
            wrapped
          />

          <Modal.Description>
            <Form success>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Trail location"
                  placeholder="Höga Kusten"
                  /* error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }} */
                  value={trailName}
                  onChange={(e) => setTrailName(e.target.value)}
                />

                <Form.Field
                  required
                  control={Input}
                  label="Difficulty"
                  placeholder="Easy/Moderate/Hard"
                  value={eventDifficulty}
                  onChange={(e) => setEventDifficulty(e.target.value)}
                />
              </Form.Group>

              {/* For calendar */}
              <Form.Field
                required
                control={Input}
                type="date"
                label="Starting Date"
                placeholder="7"
                value={maxNum}
                onChange={(e) => setMaxNum(e.target.value)}
              />

              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Duration (days)"
                  placeholder="3"
                  width={4}
                  value={eventDuration}
                  onChange={(e) => setEventDuration(e.target.value)}
                />

                {/* For distance */}
                <Form.Field
                  required
                  control={Input}
                  label="Distance (km)"
                  placeholder="83"
                  width={4}
                  value={eventDistance}
                  onChange={(e) => setEventDistance(e.target.value)}
                />
              </Form.Group>

              
                <Form.Field
                  required
                  control={Input}
                  label="Meeting point and time"
                  placeholder="Central station, Stockholm, 14:05"
                  value={meetPoint}
                  onChange={(e) => setMeetPoint(e.target.value)}
                />

                <Form.Field>
                  <label>
                    
                    <a href="
https://maps.google.com" target="_blank"><u>Select location in GoogleMaps</u> </a> and share a link 
                  </label>
                  <Form.Input
                    placeholder="https://goo.gl/maps/T3dWA3q3bGjQxePk9"
                    value={trailHyperlink}
                    onChange={(e) => setTrailHyperlink(e.target.value)}
                  />
                </Form.Field>
              

              <Form.Field
                control={Input}
                label="Event chat name"
                placeholder="Hikers unite"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />

              <Form.Field
                required
                maxLength="250"
                control={TextArea}
                label="About event (250 characters max)"
                placeholder="It´s an easy trail I took before and now..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
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
            Create event
            <Icon name="chevron right" />
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
