import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    console.log(props.store.getState().dialogsPage)
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                        render={ () => <Dialogs dispatch={props.dispatch} state={props.store.getState().dialogsPage} /> }/>

                <Route path='/profile' render={ () => <Profile
                            profilePage={props.store.getState().profilePage}
                            dispatch={props.dispatch}/> 
                }/>
            </div>
        </div>
    )
}

export default App;

