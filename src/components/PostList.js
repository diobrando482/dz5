import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, toggleShowAllPosts } from "../redux/actions";
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, showAllPosts } = useSelector(
    (state) => state.postsReducer
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleShowAllPostsClick = () => {
    dispatch(toggleShowAllPosts());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={handleShowAllPostsClick}>
        {showAllPosts ? "Hide all posts" : "Show all posts"}
      </button>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} show={showAllPosts} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
