import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, toggleComments } from "./action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCommentsToggle = (postId) => {
    dispatch(toggleComments(postId));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <button onClick={() => handleCommentsToggle(post.id)}>
              {post.showComments ? "Hide Comments" : "Show Comments"}
            </button>
            {post.showComments && (
              <div className="comments">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <p>{comment.body}</p>
                    <p className="comment-author">{comment.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
