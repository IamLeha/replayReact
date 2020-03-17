import React from 'react';
import MyPost from './MyPosts';
import {updateNewPostTextAC, addPostAC} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return <MyPost state={state} onPostChange={onPostChange} addPost={addPost} />
}

export default MyPosts;