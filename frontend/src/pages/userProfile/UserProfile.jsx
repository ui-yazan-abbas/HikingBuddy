import React, { useEffect, useState } from "react";
import imgPlaceholder from "../../assets/placeholder.jpeg";
import ImgUpload from "./ImgUpload";
import UserApi from "../../api/UserApi";
import { Button, Form } from "semantic-ui-react";

export default function UserProfile({ userData }) {
  const [userForm, setUserForm] = useState({
    name: userData.name,
    email: userData.email,
    bio: userData.bio,
    imageUrl: userData.imageUrl,
  });

  const change = ({ target: { name, value } }) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const updateUser = async () => {
    try {
      await UserApi.updateUser(userForm).then((response) =>
        setUserForm(response.data)
      );
    } catch (err) {
      console.error(err);
    }
    // getUserData().then((responce) => setUserForm(responce));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userForm);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await UserApi.getUser().then((response) => setUserForm(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);


  //save button confirmation alert
  function saveButton() {
    alert("You have updated your profile!");
  }

  return (
    <div className="profile">
      <Form onSubmit={handleSubmit}>
        <div>
          <img className="img" src={userForm.imageUrl} alt="" /> <br />
          <ImgUpload className="profile" uploadImg={change} />
          <label htmlFor="name-input"
          >Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={userForm.name}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            type="text"
            id="email-input"
            name="email"
            value={userForm.email}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="bio-input">Bio:</label>
          <textarea
            type="text"
            id="bio-input"
            name="bio"
            value={userForm.bio}
            onChange={change}
            rows="5"
            cols="80"
            id="TITLE"
          ></textarea>
        </div>
        <Button type="submit" onClick={saveButton}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
