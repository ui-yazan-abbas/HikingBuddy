import React, { useEffect, useState } from "react";
import imgPlaceholder from "../../assets/placeholder.jpeg";
import ImgUpload from "./ImgUpload";
import UserApi from "../../api/UserApi";
import { Button, Form } from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";
import PostsPage from "../posts/PostsPage";

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

  const followUser = () => {
    setUser({ ...user, followersList: [...user.followersList, currentUser] });
    updateUser();
  };


  return (
    <div className="profile">
      {!toggler && (
        <>
          <img className="img" src={user.imageUrl} alt="" /> <br />
          <h1>{user.name}</h1>
          <h3>{user.bio}</h3>
          {currentUser.name === user.name && (
            <button onClick={() => setToggler(true)}>Edit Profile</button>
          )}
          {currentUser.name !== user.name &&
            user.followersList?.includes(currentUser) && (
              <button onClick={followUser}>Follow</button>
            )}
        </>
      )}
      {toggler && (
        <EditUserProfile
          currentUser={currentUser}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}

      <h3>{user.followersList?.length}</h3>

      {user.followersList?.map((i) => (
        <li id={i.id}>{i.name}</li>
      ))}
    </div>
  );
}

// getcurrentUser().then((responce) => setUserForm(responce));

/* const getUserByName = () => {
     UserApi.getUserByName(info)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }; */
