import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = () => {
  let store;
  const middlewares = [
    thunkMiddleware, // lets us dispatch() functions
  ];

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({ name: 'flickr-gallery' });
    store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducer);
  }

  return store;
};

export default configureStore;
