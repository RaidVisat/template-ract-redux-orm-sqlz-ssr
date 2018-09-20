import React from 'react';
import css from './app.scss';
//import { hot } from 'react-hot-loader';

const Home = ()=> (
      <div className={css.test}>
        <label htmlFor="test">TEST: </label>
        <input type="text" name="" id="test"/>
        Hello React { React.version }
      </div>
    );
export default  {
    component: Home
};
//export default hot(module)(App);
