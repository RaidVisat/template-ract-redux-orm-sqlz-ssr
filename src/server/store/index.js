import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../../client/reducers';
import trunk from 'redux-thunk';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        reducers,
        applyMiddleware(trunk)
    );
    return store;
}
