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
                <Post likeCount='5' message='Hi, mr_oroz'/>
                <Post likeCount='20' message='Hello World'/>
                <Post likeCount='15' message='post 3'/>
                <Post likeCount='25' message='post 4'/>
                <Post likeCount='30' message='post 5'/>
            </div>
        </div>
    );
};

export default MyPost;