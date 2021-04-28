import React from "react";

export default function EventsForm({ onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

    // Clear the input field
    setBody("");
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
