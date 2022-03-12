import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist : ['modalState'],
  // whitelist : ['asd']
};

const persistedReducers = persistReducer(persistConfig, reducers);

export const stores = createStore(persistedReducers);
export const persistStores = persistStore(stores);
