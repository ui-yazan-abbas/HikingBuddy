import React from "react";

export default function CommentForm({ id, onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body });

    // Clear the input field
    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Reply.... "
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-info" onClick={handleSubmit}>
              Add comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
