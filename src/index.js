import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost} from './redux/state';


ReactDOM.render(
    <React.StrictMode>
        <App addPost={addPost} state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

