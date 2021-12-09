import axios from 'axios';

export function getPosts(){
    return axios.get(`https://jsonplaceholder.typicode.com/posts`)

}
export function formatPosts(postData){
    let posts=[];
    for(let key in postData){
        posts.push({...postData[key], id:key})
    }
    return posts;
}