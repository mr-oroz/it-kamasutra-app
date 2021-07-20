import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {

    const postElement = props.postData.map(v => <Post message={v.message} likeCount={v.likeCount}/>);
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