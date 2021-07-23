import React from 'react';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

export const RenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

RenderEntireThree(state)

subscribe(RenderEntireThree)
