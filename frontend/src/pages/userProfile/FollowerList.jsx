import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";

export default function FollowerList({ match }) {
  const [user, setUser] = useState({});
  const info = match.params.name.replace(/\s/g, "%20");
  useEffect(() => {
    try {
      UserApi.getUserByName(info).then((res) => setUser(res.data));
    } catch (err) {
      console.error(err);
    }
  }, [info]);

  return (
    <div>
      <h3>{user.name}'s Followers:</h3>
      {user.followersList?.map((i) => (
        <>
          <Link to={`/${i.name}/profile`}>
            {" "}
            <img
              className="list-img"
              src={i.imageUrl || "https://www.linkpicture.com/q/2_20.jpeg"}
              alt="follwer-profile"
            />{" "}
          </Link>
          <Link to={`/${i.name}/profile`}>
            <li className="list-name"id={i.id}>{i.name}</li>
          </Link>
        </>
      ))}
    </div>
  );
}
