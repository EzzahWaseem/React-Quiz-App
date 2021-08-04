import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE ,FETCH_USER,CREATE_USER,USER_LIST} from '../constants/actionTypes';

export const getList = () => async (dispatch) => {
    try {
      const { data } = await api.fetchLists();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createList = (post) => async (dispatch) => {
      try {
        console.log('create',post)
      const { data } = await api.createList(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateList = (id, post) => async (dispatch) => {
    try {
        console.log('update',id,post)

      const { data } = await api.updateList(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const deleteList = (id) => async (dispatch) => {
    try {
        console.log('delete',id)

      await api.deleteList(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getUserListData = () => async (dispatch) => {
    try {
      const { data } = await api.getUsersList();
  
      dispatch({ type: USER_LIST, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const fetchUserData = (res) => async (dispatch) => {
    try {
      console.log('fetch res create',res)
    const { user } = await api.fetchUser(res);
    console.log('user data',user)

    dispatch({ type: FETCH_USER, payload: user });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUserData = (res) => async (dispatch) => {
  try {
    console.log('create user res',res)
  const { user } = await api.createUser(res);
  console.log('create user',user)

  dispatch({ type: CREATE_USER, payload: user });
} catch (error) {
  console.log(error.message);
}
};
