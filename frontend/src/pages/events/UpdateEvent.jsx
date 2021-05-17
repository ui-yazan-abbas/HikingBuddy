import React, { useEffect } from "react";
import EventsApi from "../../api/EventsApi";

import {
  Button,
  Checkbox,
  Grid,
  Segment,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Container,
  Icon
} from "semantic-ui-react";

export default function UpdateEvent({ onUpdateClick, onSubmite, event }) {
  const [trailName, setTrailName] = React.useState(event.trailName);
  const [eventDuration, setEventDuration] = React.useState(event.eventDuration);
  const [eventDistance, setEventDistance] = React.useState(event.eventDistance);
  const [eventDifficulty, setEventDifficulty] = React.useState(
    event.eventDifficulty
  );
  const [maxNum, setMaxNum] = React.useState(event.maxNum);
  const [meetPoint, setMeetPoint] = React.useState(event.meetPoint);
  const [trailHyperlink, setTrailHyperlink] = React.useState(
    event.trailHyperlink
  );
  const [body, setBody] = React.useState(event.body);
  const [roomName, setRoomName] = React.useState(event.roomName);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateClick({
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
    onSubmite();
  };

  return (
    <Grid.Column only="widescreen" widescreen={10}>
      {/* <Segment> */}
      <Form>
        <Form.Field
          control={Input}
          label="Trail location"
          placeholder="Höga Kusten"
          value={trailName}
          onChange={(e) => setTrailName(e.target.value)}
        />

        <Form.Field
          control={Input}
          label="Difficulty"
          placeholder="Easy/Moderate/Hard"
          value={eventDifficulty}
          onChange={(e) => setEventDifficulty(e.target.value)}
        />

        <Form.Field
          control={Input}
          type="date"
          label="Starting Date"
          placeholder="7"
          value={maxNum}
          onChange={(e) => setMaxNum(e.target.value)}
        />

        <Form.Field
          control={Input}
          label="Duration (days)"
          placeholder="3"
          value={eventDuration}
          onChange={(e) => setEventDuration(e.target.value)}
        />

        <Form.Field
          control={Input}
          label="Distance (km)"
          placeholder="83"
          value={eventDistance}
          onChange={(e) => setEventDistance(e.target.value)}
        />

        <Form.Field
          control={Input}
          label="Meeting point and time"
          placeholder="Central station, Stockholm"
          value={meetPoint}
          onChange={(e) => setMeetPoint(e.target.value)}
        />

<Form.Field>
                  <label>
                    
                    <a href="
https://maps.google.com" target="_blank"><u>Select location in GoogleMaps</u> </a>  and share a link 
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
          onClick={handleUpdate}
          type="submit"
        >
          Submit changes <Icon name="chevron right" />
        </Button>

        <Button
          as="a"
          inverted
          color="red"
          onClick={handleUpdate}
          type="submit"
        >
          Cancel <Icon name="remove" />
        </Button>
      </Form>
      {/* </Segment> */}
    </Grid.Column>
  );
}
