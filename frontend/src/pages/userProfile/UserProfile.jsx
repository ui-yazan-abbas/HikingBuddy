import React, { useEffect, useState } from "react";
import imgPlaceholder from "../../assets/placeholder.jpeg";
import ImgUpload from "./ImgUpload";
import UserApi from "../../api/UserApi";
import { Button, Card, Container, Icon, Image } from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";
import PostsPage from "../posts/PostsPage";
import moment from "moment";

export default function UserProfile({ userData, match, setUserData }) {
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
      await UserApi.updateUser(user).then((res) => setUser(res.data));
    } catch (err) {
      console.error(err);
    }
    // getUserData().then((responce) => setUserForm(responce));
  };

  const followUser = () => {
    setUser({
      ...user,
      followersList: [userData],
    });
    updateUser();
  };
  console.log("user", user);
  console.log("userData", userData);

  return (
    <Card centered margin>
      {!toggler && (
        <>
          <Image src={user.imageUrl} alt="" />
          <Card.Content>
            <Card.Header> {user.name}</Card.Header>
            <Card.Meta>
              <span className="date">
                Joined in {moment(user.createAt).format("YYYY")}
              </span>
            </Card.Meta>
            <Card.Description>{user.bio} </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {userData.name === user.name && (
              <Button inverted color="blue" onClick={() => setToggler(true)}>
                Edit Profile
              </Button>
            )}
            {userData.name !== user.name && (
              <Button inverted color="green" onClick={followUser}>
                Follow
              </Button>
            )}
          </Card.Content>
        </>
      )}
      {toggler && (
        <EditUserProfile
          userData={userData}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}
    </Card>
  );
}

// getUserData().then((responce) => setUserForm(responce));

/* const getUserByName = () => {
     UserApi.getUserByName(info)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }; */
