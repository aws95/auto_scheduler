import {
  FETCH_POSTS,
  ADD_POSTS,
  REMOVE_POSTS,
  ADD_KEY,
  FETCH_KEY,
} from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};
export const addPosts = (data) => {
  return {
    type: ADD_POSTS,
    payload: {
      data,
    },
  };
};
export const removePosts = (id) => {
  return {
    type: REMOVE_POSTS,
    payload: {
      id,
    },
  };
};
export const addKey = (key) => {
  return {
    type: ADD_KEY,
    payload: {
      key,
    },
  };
};
export const fetchKey = (key) => {
  return {
    type: FETCH_KEY,
    payload: {
      key,
    },
  };
};
