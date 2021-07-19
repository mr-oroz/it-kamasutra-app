import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = () => {

    const postData = [
        {id: 1, message: 'Hi, mr_oroz', likeCount: 13},
        {id: 2, message: 'Hello World', likeCount: 25},
        {id: 3, message: 'blala', likeCount: 2},
        {id: 5, message: 'dada', likeCount: 0},
    ]
    const postElement = postData.map(v => <Post message={v.message} likeCount={v.likeCount}/>);

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPost;