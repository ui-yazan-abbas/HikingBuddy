import React, { useEffect } from "react";
import PostsApi from "../../api/PostsApi";
import { Button, Form } from "semantic-ui-react";

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
        <Form>
          <Form.Field>
            <input
              className="form-control"
              placeholder="What's on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Field>
        </Form>
        <Button primary onClick={handleUpdate}>
          Submit change
        </Button>
      </div>
    </div>
  );
}
