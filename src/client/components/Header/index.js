import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () =>(
    <header>
        <h1>SIS Encuestas</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);
export default {
    component: Header
};
