import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//import AppRouter from './routers';
import configureStore from './store';
//import createBrowserHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import routes from './routers';
//const history = createBrowserHistory ();
const store = configureStore();
    ReactDOM.hydrate(
        <Provider store = {store}>
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
