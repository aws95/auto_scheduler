import {
  FETCH_POSTS,
  ADD_POSTS,
  REMOVE_POSTS,
  ADD_KEY,
  FETCH_KEY,
} from "../actions/types";

const initState = {
  posts: [],
  key: [],
};

const postReducer = (state = initState, action) => {
  let posts = state.posts;
  let key = state.key;
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_KEY:
      return {
        ...state,
        key: action.payload,
      };
    case ADD_POSTS:
      posts.push(action.payload.data);
      return {
        ...state,
        posts: posts,
      };
    case ADD_KEY:
      key.splice(0, 1, action.payload.key);
      return {
        ...state,
        key: key,
      };
    case REMOVE_POSTS:
      return {
        ...state,
        posts: posts.map((elt) =>
          elt._id === action.payload.id ? { ...elt } : elt
        ),
      };
    default:
      return state;
  }
};
export default postReducer;
