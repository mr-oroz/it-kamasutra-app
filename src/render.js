import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

export const RenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

