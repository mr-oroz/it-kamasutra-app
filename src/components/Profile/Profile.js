import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <section>
            <ProfileInfo/>
            <MyPost />
        </section>
    );
};

export default Profile;