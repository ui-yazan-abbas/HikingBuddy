import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import PostCard from "../posts/Card";
import { Card } from 'semantic-ui-react'

export default function UsersPosts({ match }) {
  const [user, setUser] = useState({});
  const info = match.params.name.replace(/\s/g, "%20");
  useEffect(() => {
    try {
      UserApi.getUserByName(info).then((res) => setUser(res.data));
    } catch (err) {
      console.error(err);
    }
  }, [info]);
console.log("here")
  return (
    <Card color='green' centered>
        <Card.Content>
      <Card.Header  color="green">{user.name}'s Posts</Card.Header>
    </Card.Content>
    
      {user.posts?.map((post) => (
        
          <PostCard post={post} user={user} />
        
      ))}
   </Card>
  );
}
