const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newPost
            }
        }
        default:{ 
            let stateCopy = {...state}
            return stateCopy;
        }
    }
} 


export const addPostAC = () => {
    return { type:  ADD_POST}
}

export const updateNewPostTextAC = (newText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText}
}

export default profileReducer;


