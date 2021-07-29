import React from 'react';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPost dispatch={props.dispatch} newPost={props.data.newPost} postData={props.data.postData}/>
        </section>
    );
};

export default Profile;