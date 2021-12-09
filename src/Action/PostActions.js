import { formatPosts, getPosts } from '../services/PostServices';
export const CREATE_POST = "CREATE_POST";
export const GET_POSTS= "GET_POSTS";
export const CONFIREMED_POSTS= "CONFIREMED_POSTS";

export function createPostAction(){
    return{
        type: CREATE_POST,
        
    }
}
export function getPostAction(){
    return (dispatch, getState) => {
        getPosts().then((response) => {
            console.log(getState());
            let posts = formatPosts(response.data);
            dispatch(confirmedPostAction(posts));
            console.log(getState());

        });
    };
    // return{
    //     type: GET_POSTS,
        
    // }
}
export function confirmedPostAction(posts){
    return{
        type: CONFIREMED_POSTS,
        payload:posts
        
    }
}