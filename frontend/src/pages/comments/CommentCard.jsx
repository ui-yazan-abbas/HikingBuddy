//NPM packages
import React from "react";
import { useHistory, Link } from "react-router-dom";
//Component styling from semantic-ui
import { Comment, Icon } from "semantic-ui-react";
//for change the format date
import moment from "moment";
import "semantic-ui-css/semantic.min.css";

export default function CommentCard({ comment, onDeleteClick }) {
  return (
    <div className="ccontainerr">
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Link to={`/${comment.user}/profile`}>
              <Comment.Author>{comment.user}</Comment.Author>
            </Link>
            <Comment.Metadata>
              <div>
                {moment(comment.createAt).format("DD/MM/YYYY hh:mm:ss A")}
              </div>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
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
