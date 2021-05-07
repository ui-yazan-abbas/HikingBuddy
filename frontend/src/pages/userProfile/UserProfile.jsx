import React, { useEffect, useState } from "react";
import imgPlaceholder from "../../assets/placeholder.jpeg";
import ImgUpload from "./ImgUpload";
import UserApi from "../../api/UserApi";
import { Button, Card, Container, Icon, Image } from "semantic-ui-react";
import EditUserProfile from "./editUserProfile";
import PostsPage from "../posts/PostsPage";
import moment from "moment";

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
            {currentUser.name === user.name && (
              <Button inverted color="blue" onClick={() => setToggler(true)}>
                Edit Profile
              </Button>
            )}
            {currentUser.name !== user.name && (
              <Button inverted color="green" onClick={followUser}>
                Follow
              </Button>
            )}
          </Card.Content>
        </>
      )}
      <h3 className="h3">Number of followers: {user.followersList?.length}</h3>

      {user.followersList?.map((i) => (
        <>
          <h3>{user.name}'s Followers:</h3>
          <li id={i.id}>{i.name}</li>
          <li>{i.imageUrl}</li>
        </>
      ))}
      {toggler && (
        <EditUserProfile
          currentUser={currentUser}
          setToggler={setToggler}
          setUser={setUser}
        />
      )}
    </Card>
  );
}
