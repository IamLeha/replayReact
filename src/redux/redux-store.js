import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialogs-reducer';
import profilereducers from './profile-reducer';
import sidebarReducers from './sidebar-reducer';

let reducers = combineReducers({
    profilePage:profilereducers,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducers
})

let store = createStore(reducers)


export default store;

window.rstore = store;