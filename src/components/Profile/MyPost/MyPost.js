import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'
const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Post />
            </div>
        </div>
    );
};

export default MyPost;