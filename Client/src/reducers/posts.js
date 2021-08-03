// eslint-disable-next-line import/no-anonymous-default-export
import { FETCH_ALL, CREATE, UPDATE, DELETE ,FETCH_USER,CREATE_USER} from '../constants/actionTypes';
export default (states = [],action)=>{

switch(action.type){
    case FETCH_ALL:
        return action.payload;
    case CREATE:
        return [...states, action.payload];
    case UPDATE:
        return states.map((state) => (state._id === action.payload._id ? action.payload : state));
    case DELETE:
        return states.filter((state) => state._id !== action.payload);
    case FETCH_USER:
        return [...states, action.payload];
    case CREATE_USER:
        return [...states, action.payload];
    default:
        return states
}
}
