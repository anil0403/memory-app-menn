import * as api from "../api";

// actions creators
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post: object) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id: any, post: object) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
