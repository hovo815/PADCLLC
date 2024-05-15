import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from "./app";
import {store} from '@services/index';
import './global.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

