import React from "react";
import { Button, Form, Header } from "semantic-ui-react";
import Emoji from "../../components/Emoji";

export default function EventCommentForm({ id, onSubmit }) {
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
            <Form>
              <Form.Field>
                <input
                  className="commentInput"
                  id="commentInput"
                  placeholder="Comment...."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Emoji
                  editorTextChanged={(newText) => setBody(newText)}
                  onSubmited={(newText) => setBody(newText)}
                ></Emoji>
              </Form.Field>
              <Button
                s="a"
                inverted
                color="blue"
                onClick={handleSubmit}
                labelPosition="left"
                icon="edit"
                content="Add Comment"
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
