import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider, createStore } from "easy-peasy"
import model from "./model";
const store = createStore(model)

ReactDOM.render(
    <BrowserRouter basename="/home">
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
