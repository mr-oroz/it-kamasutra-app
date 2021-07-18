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
                <Post like='5' message='Hi, mr_oroz'/>
                <Post like='20' message='Hello World'/>
                <Post like='15' message='post 3'/>
                <Post like='25' message='post 4'/>
                <Post like='30' message='post 5'/>
            </div>
        </div>
    );
};

export default MyPost;