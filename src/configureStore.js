import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;