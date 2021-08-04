import  {combineReducers}  from "redux";
import posts from './posts'
import user from './user'
import userList from './userList'
export default combineReducers({ posts,user,userList })