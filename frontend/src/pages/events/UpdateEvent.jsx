import React, { useEffect } from "react";
import EventApi from "../../api/EventsApi";

export default function UpdateEvent({ onUpdateClick, onSubmite, event }) {
  const [body, setBody] = React.useState(event.body);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateClick({ body: body });
    onSubmite();
  };
  return (
    <div className="card mt-3">
      <div className="card-body">
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className="btn btn-info" onClick={handleUpdate}>
          Submit changes in event
        </button>
      </div>
    </div>
  );
}
