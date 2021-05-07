import React, { useEffect, useState } from "react";
import CommentCard from "../comments/CommentCard";
import CommentForm from "../comments/CommentForm";
import CommentsApi from "../../api/CommentsApi";
import PostsApi from "../../api/PostsApi";
import UpdateCard from "./UpdateCard";
import Like from "../posts/Like";
import moment from "moment";
import {
  Grid,
  Comment,
  Container,
  Header,
  Segment,
  Button,
} from "semantic-ui-react";
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
  const [postTitle, setPostTitle] = useState(post.postLocation);
  const [postKm, setPostKm] = useState(post.postDistance);
  const [postBody, setPostBody] = useState(post.body);

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
        .then(({ data }) => {
          setPostTitle(data.postLocation);
          setPostKm(data.postDistance);
          setPostBody(data.body);
        })
        .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    CommentsApi.getComments(post.id)
      .then(({ data }) => setComments(data))
      .catch((err) => console.error(err));
  }, [setComments]);

  // Components

  let filteredCommentList = comments.filter(
    (item) => item.commentedPost == post.id
  );
  return (
    <Container>
      <Grid.Column only="widescreen" widescreen={10}>
        <Segment color="blue">
          <Header as="h3" dividing content="" textAlign="center"></Header>
          <Comment.Group>
            <Header
              as="h3"
              dividing
              content="Stackable Vertically Divided Grid"
              textAlign="center"
            >
              Posts
            </Header>
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

                  <Comment.Text>{postKm}</Comment.Text>

                  <Comment.Text>{postBody}</Comment.Text>

                  <Header
                    as="h3"
                    dividing
                    content=""
                    textAlign="center"
                  ></Header>

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
                <br></br>
                <br></br>
                {/* Buttons for share to social media and like button */}
                <Button.Group size="small">
                  <Button color="red" icon="heart" size="small" />
                  <FacebookShareButton
                    url={window.location.href} //share the actual link of the post
                    title={post.user} //the user who wrote the post
                    description={postTitle} //the comment written in the post is shared
                    quote="link"
                  >
                    <FacebookIcon className="mx-3" size={35} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={postTitle} //the comment written in the post is shared
                    quote="link"
                    hashtag="hiking"
                  >
                    <TwitterIcon className="mx-3" size={35} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    separator=""
                    title={postTitle} //the comment written in the post is shared
                    quote="link"
                  >
                    <WhatsappIcon size={35} />
                  </WhatsappShareButton>
                </Button.Group>
                {/* Buttons for share to social media finish here  */}
                <Header as="h3" dividing content="" textAlign="center"></Header>

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
                    onUpdateClick={(postData) => {
                      updatePost(postData);
                      setIsUpdating(false);
                    }}
                    post={post}
                  />
<<<<<<< HEAD
                ))}
            </div>

            {isUpdating && (
              <UpdateCard
                onUpdateClick={(postData) => {
                  updatePost(postData);
                  setIsUpdating(false);
                }}
                post={post}
              />
            )}

            <div className="comments-form">
              <CommentForm id={post.id} onSubmit={createComment} />
            </div>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
=======
                )}

                <div className="comments-form">
                  <CommentForm id={post.id} onSubmit={createComment} />
                </div>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Segment>
      </Grid.Column>
    </Container>
>>>>>>> main
  );
}
