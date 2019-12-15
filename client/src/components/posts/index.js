import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const Posts = ({ posts, fetchPosts }) => {
  // const posts = useSelector(state => state.postsData);
  // const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map(post => <p key={post.id}>{post.text}</p>)}
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.postsData };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
