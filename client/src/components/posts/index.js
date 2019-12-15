import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, posts]);

  return (
    <div>
      <h1>Posts</h1>
      {console.log(posts)}
      {posts && posts.map(post => <p key={post.id}>{post.text}</p>)}
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.postsData };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
