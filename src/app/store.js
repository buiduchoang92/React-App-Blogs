import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../redux-toolkit/blogsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = {
  blogs: blogsReducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer
});

// export const persistor = persistStore(store);

export default store;
