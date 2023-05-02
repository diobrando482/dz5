// reducer.js
const initialState = {
    posts: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_POSTS":
        return { ...state, posts: action.payload };
      case "SHOW_COMMENTS":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.postId
              ? { ...post, showComments: true, comments: action.payload.comments }
              : post
          ),
        };
      case "HIDE_COMMENTS":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload ? { ...post, showComments: false } : post
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  