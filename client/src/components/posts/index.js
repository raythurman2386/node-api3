import React, { useState, useEffect } from "react";
import { axiosConfig as axios } from "../../utils/axiosConfig";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios()
      .get("/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <p key={post.id}>{post.text}</p>
      ))}
    </div>
  );
};

export default Posts;
