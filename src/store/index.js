import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers/index';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

export const store = createStore(
  reducer, applyMiddleware(myRouterMiddleware));
