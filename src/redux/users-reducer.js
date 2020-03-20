const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id:1, photoUrl: 'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: false, fullName: 'Dmitry', status: 'i am boss', location: {city: 'Taganrog', country: 'Russia'}},
        {id:2, photoUrl:'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: true, fullName: 'Sasha', status: 'i am boss too', location: {city: 'Taganrog', country: 'Russia'}},
        {id:3, photoUrl:'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: false, fullName: 'Igor', status: 'i am boss too', location: {city: 'Taganrog', country: 'Russia'}},
    ]
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
                users: [...state.users, ...action.users]
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

export default userReducer;