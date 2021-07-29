import React from 'react';
import store  from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const RenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

RenderEntireThree(store.state)

store.subscribe(RenderEntireThree)
