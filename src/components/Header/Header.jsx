import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <header className={s.header}>
        <NavLink to="/"> <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='anyImgOne' /> </NavLink>
    </header>
}

export default Header;