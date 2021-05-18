import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import {
  Button,
  Card,
  Image,
  Icon,
  Comment,
  Menu,
  Segment,
  Grid,
  Header,
} from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";
import moment from "moment";
import PostCard from "../posts/Card";
import { Link } from "react-router-dom";
import FollowerList from "./FollowerList";
import UsersPosts from "./usersPosts";

export default function UserProfile({ currentUser, match }) {
  const [user, setUser] = useState({});
  const [toggler, setToggler] = useState(false);
  const info = match.params.name.replace(/\s/g, "%20");
  const [postsState, setPostsState] = useState(true);
  const [followerState, setFollowerState] = useState(false);
 
  useEffect(() => {
    try {
      UserApi.getUserByName(info).then((res) => setUser(res.data));
    } catch (err) {
      console.error(err);
    }
  }, [info]);

  const updateUser = async () => {
    try {
      let name = user.name.replace(/\s/g, "%20");
      await UserApi.addFollower(name, currentUser);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  };

  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  );
  const btnStyle1 = {
    margin: "1px",
    color: "red",
  };
  const btnDefault = {
    margin: "1px",
    color: "green",
  };

  console.log(currentUser);

  const followUser = () => {
    // setUser({ ...user, followersList: [...user.followersList, currentUser] });
    updateUser();
  };
  console.log("user", user);

  const handleView = (e) => {
    console.log("name", e.target.name);
    switch (e.target.name) {
      case "posts":
        setPostsState(true);
        setFollowerState(false);
        break;
      case "followes":
        setFollowerState(true);
        setPostsState(false);
        break;

      default:
        setPostsState(true);
        setFollowerState(false);
        break;
    }
  };
  return (
    <>
      {!toggler && (
        <>
          <Card centered color="green">
            <Image
              src={user.imageUrl || "https://www.linkpicture.com/q/2_20.jpeg"}
              alt=""
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{user.name} </Card.Header>
              <Card.Meta>
                Joined in {moment(user.createAt).format("YYYY")}
              </Card.Meta>
              <Card.Description>{user.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a name="followes" class="tablinks" onClick={handleView}>
                <Icon name="user" style={btnDefault} />
                {user.followersList?.length} Followers
              </a>
              <br></br>
              {currentUser.name === user.name && (
                <Comment.Action as="a" onClick={() => setToggler(true)}>
                  <Icon name="edit" style={btnDefault} />
                  Edit Profile
                </Comment.Action>
              )}
              <br></br>
              {currentUser.id !== user.id &&
                !user.followersList?.find((u) => u == currentUser.name)
                 && (
                  <Button inverted color="green" onClick={followUser}>
                    Follow
                  </Button>
                )}
            </Card.Content>
          </Card>

          <div className="btn-position"></div>
        </>
      )}
      {toggler && (
        <EditUserProfile
          currentUser={currentUser}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}

      <Button.Group attached="top" widths={2}>
        <Button name="posts" class="tablinks" onClick={handleView}>
          {" "}
          Posts
        </Button>
        <Button.Or />
        <Button name="followes" class="tablinks" onClick={handleView}>
          Followers
        </Button>
      </Button.Group>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              {postsState && <UsersPosts match={match} />}
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              {followerState && <FollowerList match={match} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
