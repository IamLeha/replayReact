import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialogs-reducer';
import profilereducers from './profile-reducer';
import sidebarReducers from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage:profilereducers,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducers,
    usersPage: usersReducer
})

let store = createStore(reducers)


export default store;

window.rstore = store;