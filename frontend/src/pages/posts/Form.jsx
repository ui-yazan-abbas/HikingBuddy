import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function PostForm({ onSubmit }) {
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
        {/* <h4 className="card-title">Make a new post</h4> */}
        <div>
        
          <div className="form-group">
            <Form>
            <Form.Field>
              
              <input 
              className="form-control"
              placeholder="What's on your mind?" 
              value={body}
              onChange={(e) => setBody(e.target.value)}/>
            </Form.Field>
            <Button onClick={handleSubmit} type="submit">
              Post
            </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
