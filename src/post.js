import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions";

const Post = ({ post, show }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.postsReducer);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      dispatch(fetchComments(post.id));
    }
  }, [dispatch, post.id, showComments]);

  const handlePostClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <h2 onClick={handlePostClick}>{post.title}</h2>
      {showComments && (
        <div className="comments">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.body}</p>
              <p>by {comment.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
