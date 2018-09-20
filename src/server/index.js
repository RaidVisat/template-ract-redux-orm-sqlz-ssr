/*require('babel-register')({
    presets: 'env'
});
module.exports = require('./server');*/
import React from 'react';
import {clearChunks, flushChunkNames} from 'react-universal-component/server'
import ReactDOMServer from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import configureStore from './store';
import routes from '../client/routers';
import serialize from 'serialize-javascript';

export default ({ clientStats }) =>(req, res, next)=> {
    const store = configureStore();
    const serverConfig = (req, context) =>{
        console.log('CONTEXT:: ',context);
        return (
            <StaticRouter
                location = {req.url}
                context = {context}
            >
                {renderRoutes(routes)}
            </ StaticRouter>
        );
    };
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({route}) => {
        let fetchData = route.component.loadData;
        return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
    });
    Promise.all(promises).then((data) => {
        let context = {};
        const chunkNames = flushChunkNames();
        const chunks = flushChunks(clientStats, {chunkNames});
        const {
            js,
            styles,
            cssHash,
            scripts,
            stylesheets
        } = chunks;
        console.log('LOCAL: ',context.status,' ', context.url,' ', req.url,' ', context);
        if (context.status===404) {
            res.status(404);
        }
        if (context.url) {
            //console.log('TRUE__CONTEXT',context.url);
            return res.redirect (302, context.url);
        } else {
            //console.log('FALSE__CONTEXT',context.url,' ', req.url,' ', context);
            const content = ReactDOMServer.renderToString (
                <Provider store={store}>
                    {serverConfig (req, context)}
                </Provider>
                );
            return res.send(`
                <!doctype html>
                <html>
                  <head>
                    ${styles}
                    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
                    <title>React SSR</title>
                  </head>
                  <body>
                    <div id="root">${content}</div>
                    <script>window.__INITIAL_STATE__=${serialize(store.getState())}</script>
                    ${cssHash}
                    ${js}
                  </body>
                </html>
            `);
        }
    });
}
