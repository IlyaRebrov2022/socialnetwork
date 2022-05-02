import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>


            <div className={s.btnFriends}>
                <a>Friends:</a>
                <Friends friends = {props.state.friends}/>
            </div>

        </nav>
    );
}

export default NavBar;