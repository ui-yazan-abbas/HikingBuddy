import React from "react";

export default function EventsForm({ onSubmit }) {
  const [eventBody, setEventBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ eventBody:
      eventBody,
       });

    // Clear the input field
    setEventBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Create a new event</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder= "Where should we hike this time?"
              value={eventBody}
              onChange={(e) => setEventBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-info" onClick={handleSubmit}>
              Create event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
