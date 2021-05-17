import React from "react";
import { Button, Form } from "semantic-ui-react";

import { Editor } from "@tinymce/tinymce-react";

export default function CommentForm({ id, onSubmit }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback

    const newValue = removeTags(value);
    console.log(newValue);

    onSubmit({ body: newValue });

    // Clear the input field
    setValue("");
  };

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <div className="form-group">
            <Form>
              <Form.Field>
                <Editor
                  apiKey="iut1j4labqnppzak9lf427f88allim69nszid2pkxdg51bqq"
                  init={{
                    plugins: "emoticons",
                    toolbar: "emoticons",
                    toolbar_location: "bottom",
                    placeholder: "Comment...",
                    menubar: false,
                  }}
                  value={value}
                  onEditorChange={(newValue, editor) => setValue(newValue)}
                />
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
