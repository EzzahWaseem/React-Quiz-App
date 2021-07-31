// eslint-disable-next-line import/no-anonymous-default-export
export default (states = [],action)=>{

switch(action.type){
    case 'FETCH_ALL':
        return states;
    case 'CREATE':
        return states;
    case 'UPDATE':
        return states;
    case 'DELETE':
        return states;
    default:
        return states
}
}