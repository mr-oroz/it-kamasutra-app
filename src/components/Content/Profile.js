import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <section className={classes.content}>
            <div>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' />
            </div>
            <div>
                ava + decription
            </div>
            <div>
                my posts
                <div>
                    New posts
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;