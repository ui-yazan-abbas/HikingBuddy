import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function Emoji({editorTextChanged}) {
  return (
    <Editor
      apiKey="iut1j4labqnppzak9lf427f88allim69nszid2pkxdg51bqq"
      init={{
        selector: "#commentInput",
        plugins: "emoticons",
        toolbar: "emoticons",
        toolbar_location: "bottom",
        menubar: false
      }}
      onEditorChange={(_, editor) => editorTextChanged(editor.getContent({format: 'text'}))}
    />
  );
}

export default Emoji;