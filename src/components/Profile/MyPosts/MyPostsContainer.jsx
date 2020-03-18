import React from 'react';
import MyPost from './MyPosts';
import {updateNewPostTextAC, addPostAC} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return ( <MyPost state={state} onPostChange={onPostChange} addPost={addPost} />)
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;