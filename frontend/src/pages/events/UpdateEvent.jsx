import React, { useEffect } from "react";
import EventsApi from "../../api/EventsApi";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
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
    });
    onSubmite();
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
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
              label="Duration in days"
              placeholder="3"
              width={2}
              value={eventDuration}
              onChange={(e) => setEventDuration(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Distance in km"
              placeholder="83"
              width={2}
              value={eventDistance}
              onChange={(e) => setEventDistance(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Max participants"
              placeholder="7"
              width={2}
              value={maxNum}
              onChange={(e) => setMaxNum(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Difficulty"
              placeholder="Easy/Medium/Expert"
              value={eventDifficulty}
              onChange={(e) => setEventDifficulty(e.target.value)}
            />

            <Form.Field
              control={Input}
              label="Meeting point"
              placeholder="Central station, Stockholm"
              value={meetPoint}
              onChange={(e) => setMeetPoint(e.target.value)}
            />

            <div class="ui labeled input">
              <label>Website link to location/link</label>
              <div class="ui label label">http://</div>
              <input type="text" placeholder="www.hogakusten.com/en" />
              value={trailHyperlink}
              onChange={(e) => setTrailHyperlink(e.target.value)}
            </div>
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="About event"
            placeholder="It´s an easy trail I took before and now..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <Form.Field control={Button}>
            {" "}
            onClick={handleUpdate}
            Submit event changes
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}
