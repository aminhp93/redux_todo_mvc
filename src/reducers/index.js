import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
  state: (state = {}) => state,
  router: routerReducer
});
