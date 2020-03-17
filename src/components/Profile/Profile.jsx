import React from 'react';
//import s from './Profile.module.css';
import ContainerMyPost from './MyPosts/ContainerMyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <ContainerMyPost store={props.store} />
        </div>
    )
}

export default Profile;