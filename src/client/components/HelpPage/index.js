import React from 'react';
import {Link} from 'react-router-dom';
const HelpPage = () =>(
    <div>
        <p>This is help component</p>
        <span>return to: </span><Link to="/">Home Page</Link>
    </div>
);
export default {
    component: HelpPage
};
