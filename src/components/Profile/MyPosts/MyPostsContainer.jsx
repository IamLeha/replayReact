import MyPost from './MyPosts';
import {updateNewPostTextAC, addPostAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
} 

const mapDispatchToProps = (dispatch) => {
    return{
        onPostChange: (text) => {
            let action = updateNewPostTextAC(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostsContainer;