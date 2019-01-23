import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
    collapsed: true
})

const enchancer = composeWithDevTools(applyMiddleware(logger));

const store = createStore(reducer, enchancer);

export default store;