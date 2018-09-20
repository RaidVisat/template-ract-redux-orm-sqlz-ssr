import {FETCH_USERS} from '../constants';
export default (state= [], action)=>{
    switch (action.type){
        case FETCH_USERS:
            //console.log('A',action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
};
