//NPM packages
import React from "react";
//Component styling from semantic-ui
import { Comment, Icon } from "semantic-ui-react";
//for change the format date
import moment from "moment";
import 'semantic-ui-css/semantic.min.css'

export default function EventCommentCard({ eventComment, onDeleteClick }) {
  return (
    <div className="ccontainerr">
    <Comment.Group>
      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
        <Comment.Content>
          <Comment.Author>{eventComment.user}</Comment.Author>
          <Comment.Metadata>
            <div>
              {moment(eventComment.createAt).format("DD/MM/YYYY hh:mm:ss A")}
            </div>
          </Comment.Metadata>
          <Comment.Text>{eventComment.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action onClick={onDeleteClick}>
              Delete Comment
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
    </div>
  );
}
