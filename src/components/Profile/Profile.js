import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
        <section className={classes.content}>
            <div>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' />
            </div>
            <div>
                ava + decription
            </div>
            <MyPost />
        </section>
    );
};

export default Profile;