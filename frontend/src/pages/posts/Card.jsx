import React, { useEffect, useState } from "react";
import CommentCard from "../comments/CommentCard";
import CommentForm from "../comments/CommentForm";
import CommentsApi from "../../api/CommentsApi";
import PostsApi from "../../api/PostsApi";
import UpdateCard from "./UpdateCard";
import moment from "moment";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useHistory, Link } from "react-router-dom";
//  Importing the buttons to be used for react share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function PostCard({
  post,
  onDeleteClick,
  onUpdateClick,
  userData,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [comments, setComments] = useState([]);
  const [postTitle, setPostTitle] = useState(post.body);

  async function createComment(commentData) {
    try {
      const response = await CommentsApi.createComment(post.id, commentData);
      const comment = response.data;
      const newComment = comments.concat(comment);

      setComments(newComment);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteComment(post) {
    try {
      await CommentsApi.deleteComment(post.id);
      const newComments = comments.filter((p) => p.id !== post.id);

      setComments(newComments);
    } catch (e) {
      console.error(e);
    }
  }

  async function updatePost(postToUpdate) {
    try {
      await PostsApi.updatePost(post.id, postToUpdate);
      PostsApi.getPostById(post.id)
        .then(({ data }) => setPostTitle(data.body))
        .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    CommentsApi.getComments(post.id)
      .then(({ data }) => setComments(data))
  }, [setComments]);

  // Components

  let filteredCommentList = comments.filter(
    (item) => item.commentedPost == post.id
  );

  return (
    <div className="postcard">
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
          />
          <Comment.Content>
            <p></p>

            <div className="container">
              <Comment.Author as="a">
                {" "}
                <Link to={`/${post.user}/profile`}>{post.user}</Link>
              </Comment.Author>
              <Comment.Metadata>
                <div>
                  {moment(post.createAt).format("DD/MM/YYYY hh:mm:ss A")}
                </div>
              </Comment.Metadata>
              <Comment.Text>{postTitle}</Comment.Text>

              <Comment.Actions>
                <Comment.Action active>Reply</Comment.Action>

                <Comment.Action active onClick={() => setIsUpdating(true)}>
                  Edit Post
                </Comment.Action>
                {post.user == post.user && (
                  <Comment.Action onClick={onDeleteClick} active>
                    {" "}
                    Delete post
                  </Comment.Action>
                )}
              </Comment.Actions>
            </div>

            <div className="comments-container">
              {comments &&
                filteredCommentList.map((comment) => (
                  <CommentCard
                    key={post.id}
                    comment={comment}
                    onDeleteClick={() => deleteComment(comment)}
                  />
                ))}
            </div>

            {isUpdating && (
              <UpdateCard
                onUpdateClick={(postData) => updatePost(postData)}
                post={post}
                onSubmite={() => setIsUpdating(false)}
              />
            )}

            <div className="comments-form">
              <CommentForm id={post.id} onSubmit={createComment} />
            </div>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
}
