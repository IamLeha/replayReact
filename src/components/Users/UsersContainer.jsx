import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../../redux/users-reducer'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispathToProps = (dispath) => {
    return {
        follow: (userId) => {
            dispath(followAC(userId))
        },
        unfollow: (userId) => {
            dispath(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispath(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Users) 