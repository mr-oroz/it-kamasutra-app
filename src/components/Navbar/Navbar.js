import React from 'react';
import classes from '../Profile/Navbar.module.css';
import {NavLink, Route} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    const FriendsComponent = () => <Friends data={props.state.MessagePage}/>;

    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a href='/news'>News</a>
            </div>
            <div className={classes.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='/settings'>Settings</a>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.active}>
                    Friends
                    <Route path='/friends' render={FriendsComponent}/>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;