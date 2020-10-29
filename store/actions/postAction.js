import * as types from '../types';

export const fetchPosts = () => async dispatch => {
    // fetch from API here...
    dispatch({
        type: types.GET_POSTS,
        payload: ['post1', 'post2', 'post3']
    })
}