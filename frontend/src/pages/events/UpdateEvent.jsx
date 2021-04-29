import React, { useEffect } from "react";
import EventsApi from "../../api/EventsApi";

export default function UpdateEvent({ onUpdateClick, onSubmite, event }) {
  const [eventBody, setEventBody] = React.useState(event.eventBody);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateClick({ eventBody: eventBody });
    onSubmite();
  };
  return (
    <div className="card mt-3">
      <div className="card-body">
        <textarea
          className="form-control"
          value={eventBody}
          onChange={(e) => setEventBody(e.target.value)}
        />

        <button className="btn btn-info" onClick={handleUpdate}>
          Submit event changes
        </button>
      </div>
    </div>
  );
}
