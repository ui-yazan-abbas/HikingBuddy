//NPM packages
import React from "react";
import { Link } from "react-router-dom";
//Component styling from semantic-ui
import { Comment, Icon } from "semantic-ui-react";
//for change the format date
import moment from "moment";
import "semantic-ui-css/semantic.min.css";

export default function EventCommentCard({
  eventComment,
  onDeleteClick,
  user,
}) {
  return (
    <div className="ccontainerr">
      <Comment.Group>
        <Comment>
          <Link to={`/${eventComment.user}/profile`}>

          <Comment.Avatar src="https://i.imgur.com/G5UIwnL.png" />

            {/* {<Comment.Avatar src={user.imageUrl} />} */}

          </Link>
          <Comment.Content>
            <Link to={`/${eventComment.user}/profile`}>
              {" "}
              <Comment.Author>{eventComment.user}</Comment.Author>
            </Link>
            <Comment.Metadata>
              <div>
                {moment(eventComment.createAt).format("DD/MM/YYYY hh:mm:ss A")}
              </div>
            </Comment.Metadata>
            <Comment.Text>{eventComment.body}</Comment.Text>
            <Comment.Actions>
              {eventComment.user === user.name && (
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
