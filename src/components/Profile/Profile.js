import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPost addPost={props.addPost} postData={props.data.postData}/>
        </section>
    );
};

export default Profile;