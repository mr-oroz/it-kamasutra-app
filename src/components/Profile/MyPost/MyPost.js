import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/state";

const MyPost = (props) => {
    const postElement = props.postData.map(v => <Post message={v.message} likeCount={v.likeCount}/>);
    const ElementPost = React.createRef();
    const addPost = () => {
        // let text = ElementPost.current.value
        props.dispatch(addPostActionCreator());
        // props.updateNewPostText('')
    }
    const onPostChange = () => {
        let text = ElementPost.current.value
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={ElementPost}
                        value={props.newPost}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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