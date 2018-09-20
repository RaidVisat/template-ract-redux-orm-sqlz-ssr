import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import trunk from 'redux-thunk';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        reducers,
        window.__INITIAL_STATE__,
        composeEnhancers(applyMiddleware(trunk, logger))
    );
    return store;
}
