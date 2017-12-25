import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';


export default combineReducers({
  state: (state = {}) => state,
  todos,
  router: routerReducer
});
