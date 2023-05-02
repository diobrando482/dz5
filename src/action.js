// actions.js
export const fetchPosts = () => {
    return async (dispatch) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      const posts = data.map((post) => ({
        ...post,
        showComments: false,
        comments: [],
      }));
      dispatch({ type: "FETCH_POSTS", payload: posts });
    };
  };
  
  export const toggleComments = (postId) => {
    return async (dispatch, getState) => {
      const { posts } = getState();
      const post = posts.find((post) => post.id === postId);
      if (post.showComments) {
        dispatch({ type: "HIDE_COMMENTS", payload: postId });
      } else {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const comments = await response.json();
        dispatch({ type: "SHOW_COMMENTS", payload: { postId, comments } });
      }
    };
  };
  