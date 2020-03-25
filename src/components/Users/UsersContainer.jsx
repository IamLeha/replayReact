import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setTotalUsersCountAC} from '../../redux/users-reducer'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispath(setCurrentPagesAC(currentPage))
        },
        setTotalUsersCount: (totalUserCount) => {
            dispath(setTotalUsersCountAC(totalUserCount))
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Users) 