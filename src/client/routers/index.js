import React from 'react';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/404';
import HelpPage from '../components/HelpPage';
import HomePage from '../components/HomePage';
import UsersListPage from '../components/UsersListPage';
const AppRouter = [
    {
        ...HomePage,
        path:'/',
        exact: true
    },
    {
        ...HelpPage,
        path: '/help'
    },
    {
        ...UsersListPage,
        path:'/users'
    },
    {
        ...NotFoundPage,
        path: '*'
    }
];/*() =>(
    <div>
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/help" component={HelpPage} />
            <Route path="/users" component={UsersListPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);*/
export default AppRouter;
