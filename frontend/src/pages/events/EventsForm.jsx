import React, { Component } from "react";
/* import EventSearch from "../events/EventSearch"; */

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
  };

  return (
    <Card centered margin>
      {/*  <EventSearch /> */}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button as="a" inverted color="green" type="submit">
            Create a Hiking Event
          </Button>
        }
      >
        <Modal.Header style={{ color: "#e9896a" }}>
          Create Your Hiking Event
        </Modal.Header>

        <Modal.Content image scrolling>
          <Image
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
                  error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }}
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
                error={{
                  content: "Please enter a valid email address",
                  pointing: "below",
                }}
                value={maxNum}
                onChange={(e) => setMaxNum(e.target.value)}
              />

              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Duration (days)"
                  placeholder="3"
                  error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }}
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
                  error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }}
                  width={4}
                  value={eventDistance}
                  onChange={(e) => setEventDistance(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Meeting point and time"
                  placeholder="Central station, Stockholm, 14:05"
                  error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }}
                  value={meetPoint}
                  onChange={(e) => setMeetPoint(e.target.value)}
                />

                <Form.Field
                  control={Input}
                  label="Event chat room name"
                  placeholder="Höga team"
                  error={{
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }}
                  value={trailHyperlink}
                  onChange={(e) => setTrailHyperlink(e.target.value)}
                />
              </Form.Group>

              <Form.Field
                required
                control={TextArea}
                label="About event"
                placeholder="It´s an easy trail I took before and now..."
                success={{
                  content: "Please enter a valid email address",
                  pointing: "below",
                  color: "blue",
                }}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />

              <Message
                success
                header="Event Created"
                content="Nice! Now you can go back and see all events"
              />

              <Button
                as="a"
                inverted
                color="blue"
                onClick={handleSubmit}
                type="submit"
              >
                Create event
                <Icon name="chevron right" />
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            onClick={() => setOpen(false)}
            as="a"
            inverted
            color="green"
            type="submit"
          >
            See events <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    </Card>
  );
}
