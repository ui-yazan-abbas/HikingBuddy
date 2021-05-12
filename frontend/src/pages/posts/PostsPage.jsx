// NPM Packages
import React, { useEffect, useState } from "react";

// Project files
import PostsApi from "../../api/PostsApi";
import PostForm from "./Form";
import Card from "./Card";

export default function PostsPage({ user }) {
  // Local state
  const [posts, setPosts] = useState([]);

  // Methods

  // Components

  async function createPost(postData) {
    try {
      const response = await PostsApi.createPost(postData);
      const post = response.data;
      const newPosts = posts.concat(post);
      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePost(post) {
    try {
      await PostsApi.deletePost(post.id);
      const newPosts = posts.filter((p) => p.id !== post.id);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    PostsApi.viewAllPosts()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, [setPosts]);

  // Components
  const CardsArray = posts.map((post) => (
    <Card
      key={post.id}
      post={post}
      onDeleteClick={() => deletePost(post)}
      user={user}
    />
  ));

  return (
    <div className="post">
      <div>
        <PostForm onSubmit={(postData) => createPost(postData)} />

        {CardsArray}
      </div>
    </div>
  );
}
