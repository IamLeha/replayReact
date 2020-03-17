import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import ContainerDialogs from './components/Dialogs/ContainerDialogs';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <ContainerDialogs store={props.store} />} />

                <Route path='/profile' render={ () => <Profile store={props.store}/> 
                }/>
            </div>
        </div>
    )
}

export default App;

