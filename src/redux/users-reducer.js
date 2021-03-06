const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 19,
    currentPage: 2
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return { ...u, followed: true}
                    }
                    return u; 
                })
            }
    
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return { ...u, followed: false}
                    }
                    return u;
                })

            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        
        default:
            return state;
        
    }
};

export const followAC = (userId) => {
    return { type:  FOLLOW, userId}
}

export const unfollowAC = (userId) => {
    return { type:  UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users}
}

export const setCurrentPagesAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCountAC = (totalUserCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUserCount}
}

export default userReducer;