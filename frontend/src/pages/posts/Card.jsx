import React, { useEffect, useState } from "react";
import CommentCard from "../comments/CommentCard";
import CommentForm from "../comments/CommentForm";
import CommentsApi from "../../api/CommentsApi";
import PostsApi from "../../api/PostsApi";
import UpdateCard from "./UpdateCard";
import moment from "moment";

import {
  Grid,
  Divider,
  Feed,
  Icon,
  Comment,
  Container,
  Header,
  Segment,
  Button,
  Image,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
//  Importing the buttons to be used for react share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function PostCard({ post, onDeleteClick, onUpdateClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [comments, setComments] = useState([]);
  const [likeToggler, setLikeToggler] = useState();
  const [likesCount, setLikesCount] = useState(post.listOfLikes?.length | 0);
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
  //Like button handling
  const handleLike = (e) => {
    console.log("here");
    if (likeToggler) {
      setLikesCount(likesCount - 1);
      undoLikePost();
      setLikeToggler(false);
    } else {
      likePost();
      setLikesCount(likesCount + 1);
      setLikeToggler(true);
    }
  };
  const likePost = async () => {
    try {
      await PostsApi.likePost(post.id).then(setLikeToggler(true));
    } catch (e) {
      console.error(e);
    }
  };
  const undoLikePost = async () => {
    try {
      await PostsApi.undoLikePost(post.id).then(setLikeToggler(false));
    } catch (e) {
      console.error(e);
    }
  };
  const btnStyle1 = {
    margin: "1px",
    color: "red",
  };
  const btnDefault = {
    margin: "1px",
    color: "green",
  };

  // end of Like button handling

  useEffect(() => {
    CommentsApi.getComments(post.id).then(({ data }) => setComments(data));
  }, [setComments]);

  // Components

  let filteredCommentList = comments.filter(
    (item) => item.commentedPost == post.id
  );

  return (
    <Container>
      <br></br>
      <Segment.Group>
        {/* Avatars from Semantic UI
      https://gist.github.com/tuur29/2daf51872917b6143f439c01f922364b */}

        <Segment>
          <Link to={`/${post.user}/profile`}>
            <Image
              floated="left"
              size="mini"
              as="a"
              src="https://i.imgur.com/G5UIwnL.png"
              // src="https://i.imgur.com/6OUVDLi.png"

              // src={user.imageUrl}
            />
          </Link>

          <Comment.Author as="a">
            {" "}
            <Link to={`/${post.user}/profile`}>{post.user}</Link>
          </Comment.Author>

          <Feed.Summary>
            <Comment.Metadata>
              <div>{moment(post.createAt).format("MMMM Do, YYYY HH:mm")}
              </div>
            </Comment.Metadata>
          </Feed.Summary>

          <Divider hidden />

          <Grid columns={2} textAlign="center" stackable>
            <Grid.Column>
              <Icon name="location arrow" />
              <b>Location:</b> {postTitle}
            </Grid.Column>
            <Grid.Column>
              <Icon name="chart area" />
              <b>Distance:</b> {postKm} km
            </Grid.Column>
          </Grid>

          <Feed.Extra center>
            <Divider hidden />
            <Image src={post.imageUrl} className="shadow" /> <Divider hidden />
          </Feed.Extra>

          <Feed.Summary className="margin-left">
            <Comment.Metadata>
              <Comment.Text>{postBody}</Comment.Text>
            </Comment.Metadata>
          </Feed.Summary>

          <Header as="h3" dividing content="" textAlign="center"></Header>
          <br></br>
          <br></br>

          <Grid columns={2} textAlign="center" stackable>
            <Comment.Group size="large">
              <Comment>
                <Comment.Actions>
                  {post.user == user.name && (
                    <>
                      <Comment.Action
                        as="a"
                        active
                        onClick={() => setIsUpdating(true)}
                      >
                        Edit post
                      </Comment.Action>
                      <Comment.Action as="a" onClick={onDeleteClick} active>
                        {" "}
                        Delete post
                      </Comment.Action>
                    </>
                  )}

                  <Comment.Action active>
                    {/* {comments.length} comment(s) */}
                  </Comment.Action>

                  <Comment.Action active>
                    <Feed.Like>
                      <Icon
                        name="like"
                        size="large"
                        inverted
                        color="red"
                        onClick={handleLike}
                      />

                      {likesCount}
                    </Feed.Like>
                  </Comment.Action>
                </Comment.Actions>
              </Comment>
            </Comment.Group>
          </Grid>

          <br></br>
          {/* Buttons for share to social media and like button */}
          <Button.Group size="small" className="AvatarWrap">
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
                  user={user}
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
          )}

          <div className="comments-form">
            <CommentForm id={post.id} onSubmit={createComment} />
          </div>
        </Segment>
      </Segment.Group>
    </Container>
  );
}
