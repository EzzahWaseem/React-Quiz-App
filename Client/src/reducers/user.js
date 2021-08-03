// eslint-disable-next-line import/no-anonymous-default-export
import { FETCH_USER,CREATE_USER} from '../constants/actionTypes';
export default (states = [],action)=>{

switch(action.type){
    case FETCH_USER:
        return [...states, action.payload];
    case CREATE_USER:
        return [...states, action.payload];
    default:
        return states
}
}
