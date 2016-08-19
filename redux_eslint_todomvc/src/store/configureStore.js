import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { logger } from '../middleware';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {

  const loggerRedux = createLogger();
  const createStoreWithMiddleware = applyMiddleware(logger, loggerRedux)(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
