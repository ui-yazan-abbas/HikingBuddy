import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import { Button, Card, Image } from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";
import moment from "moment";
import PostCard from "../posts/Card";
import { Link } from "react-router-dom";

export default function UserProfile({ currentUser, match }) {
  const [user, setUser] = useState({});
  const [toggler, setToggler] = useState(false);
  const info = match.params.name.replace(/\s/g, "%20");

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
          <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'London')">
              Posts
            </button>
            <button class="tablinks" onclick="openCity(event, 'Paris')">
              Followers
            </button>
          </div>
        </>
      )}
      <h3 className="h3">Followers: {user.followersList?.length}</h3>
      <h3>{user.name}'s Followers:</h3>
      {user.followersList?.map((i) => (
        <>
          <Link to={`/${i.name}/profile`}>
            {" "}
            <img
              className="img"
              src={i.imageUrl || "https://www.linkpicture.com/q/2_20.jpeg"}
              alt="follwer-profile"
            />{" "}
          </Link>
          <Link to={`/${i.name}/profile`}>
            <li id={i.id}>{i.name}</li>
          </Link>
        </>
      ))}
      {toggler && (
        <EditUserProfile
          currentUser={currentUser}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}

      <hr />
      <h3>Your Posts:</h3>
      {user.posts?.map((post) => (
        <>
          <PostCard post={post} user={user} />
        </>
      ))}
    </>
  );
}
