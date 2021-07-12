import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../redux-toolkit/blogsSlice';

const rootReducer = {
  blogs: blogsReducer
};

const store = configureStore({
  reducer: rootReducer
});
export default store;
