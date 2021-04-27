import React, { useEffect } from "react";
import PostsApi from "../../api/PostsApi";

export default function UpdateCard({ onUpdateClick, onSubmite, post }) {
  const [body, setBody] = React.useState(post.body);

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
          Submit change
        </button>
      </div>
    </div>
  );
}
