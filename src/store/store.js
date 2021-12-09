import { createStore, applyMiddleware, compose } from 'redux';
import PostsReducer from '../Reducer/PostsReducer';
//Store enhancer called applymiddleware
import {GET_POSTS , confirmedPostAction} from '../Action/PostActions';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('dispatching action', action);
    console.log('before dispatching state', store.getState());
    let result = next(action);
    setTimeout(() => {
        console.log('dispatch time out');
    }, 5000);
    console.log('next state', store.getState());
    return result;
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

// const fetchDataMiddleware = (store) => (next) => (action) => {
//     if (action.type === GET_POSTS) {
//         //ajax call
//         axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         .then((response) => {
//             console.log(response.data);
//             let posts=[];
//             for(let key in response.data){
//                 posts.push({...response.data[key], id:key})
//             }
//             store.dispatch(confirmedPostAction(posts));
//         })
//     }

//     return next(action);
// };
// const middleware = applyMiddleware(loggerMiddleware,fetchDataMiddleware);
const middleware = applyMiddleware(thunk);

export const store = createStore(PostsReducer,composeEnhancers(middleware));