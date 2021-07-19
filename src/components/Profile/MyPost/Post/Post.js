import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <>
            <div className={classes.item}>
                <div>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png' />
                    {props.message}
                </div>
                <span>line: {props.likeCount}</span>
            </div>
        </>
    );
};

export default Post;