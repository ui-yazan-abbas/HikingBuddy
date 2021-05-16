//NPM packages
import React from "react";
import { useHistory, Link } from "react-router-dom";
//Component styling from semantic-ui
import { Comment, Icon } from "semantic-ui-react";
//for change the format date
import moment from "moment";
import "semantic-ui-css/semantic.min.css";

export default function CommentCard({ comment, onDeleteClick, user }) {
  console.log(comment);
  return (
    <div className="ccontainerr">
      <Comment.Group>
        <Comment>
        <Link to={`/${comment.user}/profile`}>

        <Comment.Avatar src="https://i.imgur.com/G5UIwnL.png" />
          {/* <Comment.Avatar src={user.imageUrl} /> */}
          </Link>
          <Comment.Content>
            <Link to={`/${comment.user}/profile`}>
              <Comment.Author>{comment.user}</Comment.Author>
            </Link>
            <Comment.Metadata>
              <div>
              {moment(comment.createAt).format("MMMM Do, YYYY HH:mm")}
              </div>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
            <Comment.Actions>
              {comment.user === user.name && (
                <Comment.Action onClick={onDeleteClick}>
                  Delete Comment
                </Comment.Action>
              )}
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
}
