import React from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Route render={({ staticContext }) => {
            if (staticContext) {
                staticContext.status = 404;
            }
            return (
                <div>
                    <h1>404 : Not Found</h1>
                    <Link to="/">Home Page</Link>
                </div>
            )
        }}/>
    );
};
export default {
    component: NotFoundPage
};

