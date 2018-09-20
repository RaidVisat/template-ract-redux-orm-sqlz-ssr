import axios from 'axios';
import {FETCH_USERS} from "../constants";

export const fetchUsers = () =>
    async (dispatch) => {
        const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
        console.log('X',res.data);
        dispatch({
            type: FETCH_USERS,
            payload: res
        });
};
