const initialState = {
    posts:[
        {
         id:1,
         title:'Post Title 1', 
         body:'Sample Description 1'},
         {
            id:2,
            title:'Post Title 2', 
            body:'Sample Description 2'},
        {
            id:3,
            title:'Post Title 3', 
            body:'Sample Description 3'},   
                 
    ]
}

export default function PostsReducer(state = initialState ,actions){
    switch(actions.type){
        case "CREATE_POST":
            const len = state.posts.length + 1;
            const postData={
                id:len,
                title:`Post Title ${len}`, 
                body:`Sample Description ${len}`
            }
            const data = [...state.posts, postData]
            return {
                ...state,
                posts:data
            }
        case "CONFIREMED_POSTS":
            return{
                ...state,
                posts: actions.payload
            }
        default:
            return state;

    }
}