import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

// TYPES
import { GitHub } from './modules/gitHub/types';

export interface ApplicationState {
  gitHub: GitHub;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['gitHub'],
};

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
