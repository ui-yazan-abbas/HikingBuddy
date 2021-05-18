import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import { Card, Feed } from "semantic-ui-react";
import moment from "moment";

export default function FollowerList({ match }) {
  const [user, setUser] = useState({});
  console.log("userrr", user);
  const info = match.params.name.replace(/\s/g, "%20");
  useEffect(() => {
    try {
      UserApi.getUserByName(info).then((res) => setUser(res.data));
    } catch (err) {
      console.error(err);
    }
  }, [info]);

  return (
    <Card color="green" centered>
      <Card.Content>
        <Card.Header color="green">{user.name}'s Followers</Card.Header>
      </Card.Content>
      <Card.Content>
      
        <Feed>
          {user.follwersList?.length == 0 ? (
            <h3>no followers yet</h3>
          ) : (
            user.followersList?.map((i, index) => (
              <>
                <Feed.Event>
                  <Feed.Label>
                    <img
                      className="list-img"
                      src={
                        i.imageUrl || "https://www.linkpicture.com/q/2_20.jpeg"
                      }
                      alt="follwer-profile"
                    />
                  </Feed.Label>

                  <Feed.Content>
                    <Feed.Date
                      content={moment(
                        "Thu May 17 2021 17:30:03 GMT+0300"
                      ).fromNow()}
                    />
                    <Link to={`/${user.followersList[index]}/profile`}>
                      <Feed.Summary>
                        <a>{user.followersList[index]}</a> started to follow{" "}
                        {user.name}.
                      </Feed.Summary>
                    </Link>
                  </Feed.Content>
                </Feed.Event>

               
              </>
            ))
          )}
        </Feed>
      </Card.Content>
    </Card>
  );
}
