import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import { Button, Card, Image, Icon } from "semantic-ui-react";
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

  console.log(currentUser);

  const followUser = () => {
    setUser({ ...user, followersList: [...user.followersList, currentUser] });
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
          <Card centered>
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
              <Card.Description>
                 {user.bio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
            {user.followersList?.length} Followers
              </a>
            </Card.Content>
          </Card>
      

          <div className="btn-position">
            {currentUser.name === user.name && (
              <Button inverted color="blue" onClick={() => setToggler(true)}>
                Edit Profile
              </Button>
            )}
            {currentUser.name !== user.name &&
              user.followersList?.filter((u) => u.name == currentUser.name)
                .length === 0 && (
                <Button inverted color="green" onClick={followUser}>
                  Follow
                </Button>
              )}
          </div>
        </>
      )}
      {toggler && (
        <EditUserProfile
          currentUser={currentUser}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}
      <div class="tab">
        <button name="posts" class="tablinks" onClick={handleView}>
          Posts
        </button>

        <button name="followes" class="tablinks" onClick={handleView}>
          Followers: {user.followersList?.length}
        </button>
      </div>

      {followerState && <FollowerList match={match} />}
      {postsState && <UsersPosts match={match} />}
    </>
  );
}
