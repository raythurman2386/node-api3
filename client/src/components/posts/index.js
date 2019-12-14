import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const Posts = () => {
  const posts = useSelector(state => state.postsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map(post => <p key={post.id}>{post.text}</p>)}
    </div>
  );
};

export default Posts;
