import React, { useEffect, useState } from "react";
import imgPlaceholder from "../../assets/placeholder.jpeg";
import ImgUpload from "./ImgUpload";
import UserApi from "../../api/UserApi";
import { Button, Form } from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";

export default function UserProfile({ userData, match }) {
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

  const followUser = () => {};

  return (
    <div className="profile">
      {!toggler && (
        <>
          <img className="img" src={user.imageUrl} alt="" /> <br />
          <h1>{user.name}</h1>
          <h3>{user.bio}</h3>
          {userData.name === user.name && (
            <button onClick={() => setToggler(true)}>Edit Profile</button>
          )}
          {userData.name !== user.name && (
            <button onClick={followUser()}>Follow</button>
          )}
        </>
      )}
      {toggler && (
        <EditUserProfile
          userData={userData}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}
    </div>
  );
}

// getUserData().then((responce) => setUserForm(responce));

/* const getUserByName = () => {
     UserApi.getUserByName(info)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }; */
