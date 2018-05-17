import { combineReducers } from 'redux';

import apiData from './reducers/fetchDataReducer';
import galleryList from './reducers/galleryListReducer';
import imageDetail from './reducers/imageDetailReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  galleryList,
  apiData,
  imageDetail,
});

export default AppReducer;
