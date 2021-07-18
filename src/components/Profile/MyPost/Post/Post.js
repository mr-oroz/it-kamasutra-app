import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <>
            <div className={classes.item}>
                <div>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png' />
                    post 1
                </div>
                <span>like</span>
            </div>
        </>
    );
};

export default Post;