import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import { Button, Card, Image } from "semantic-ui-react";
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

  console.log(currentUser);

  const followUser = () => {
    setUser({ ...user, followersList: [...user.followersList, currentUser] });
    updateUser();
  };
  console.log("user", user);

  const handleView = (e) => {
    console.log("name",e.target.name)
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
          <div className="introduction">
            <div className="column-left">
              <Image
                className="profile-img"
                src={user.imageUrl || "https://www.linkpicture.com/q/2_20.jpeg"}
                alt=""
              />
            </div>
            <div className="column-right">
              <h1 className="name"> {user.name} </h1>
              <span className="date">
                Joined in {moment(user.createAt).format("YYYY")}
              </span>
              <div className="bio">
                {" "}
                <h3>{user.bio}</h3>
              </div>
            </div>
          </div>

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
        {followerState &&

      <FollowerList match={match} />
        }
  {
    postsState &&
    <UsersPosts match={match} />
  }
    </>
  );
}
