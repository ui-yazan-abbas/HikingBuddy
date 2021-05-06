import React from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
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
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Create a hiking event</h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Location/Trail name"
              placeholder="Höga Kusten"
              value={trailName}
              onChange={(e) => setTrailName(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Difficulty"
              placeholder="Easy/Medium/Expert"
              value={eventDifficulty}
              onChange={(e) => setEventDifficulty(e.target.value)}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Duration in days"
              placeholder="3"
              width={4}
              value={eventDuration}
              onChange={(e) => setEventDuration(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Distance in km"
              placeholder="83"
              width={4}
              value={eventDistance}
              onChange={(e) => setEventDistance(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Max participants"
              placeholder="7"
              width={4}
              value={maxNum}
              onChange={(e) => setMaxNum(e.target.value)}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Meeting point and time"
              placeholder="Central station, Stockholm"
              value={meetPoint}
              onChange={(e) => setMeetPoint(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Website link to location or trail"
              placeholder="https://www.hogakusten.com/en"
              value={trailHyperlink}
              onChange={(e) => setTrailHyperlink(e.target.value)}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="About event"
            placeholder="It´s an easy trail I took before and now..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <Button
            as="a"
            inverted
            color="blue"
            onClick={handleSubmit}
            type="submit"
          >
            Create event
          </Button>
        </Form>
      </div>
    </div>
  );
}
