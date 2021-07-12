import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetApiService from '../api/getApi';

const apiService = new GetApiService();

export const getBlogs = createAsyncThunk('blogs/getBlogs', async blogsUrl => {
  const response = await apiService.getUrl(blogsUrl);
  return response;
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle',
    data: {},
    error: {}
  },
  reducers: {},
  extraReducers: {
    [getBlogs.pending]: (state, action) => {
      state = {
        status: 'loading',
        data: {},
        error: {}
      };
    },
    [getBlogs.fulfilled]: (state, action) => {
      state = {
        status: 'idle',
        data: action.payload,
        error: {}
      };
    },
    [getBlogs.rejected]: (state, action) => {
      state = {
        status: 'idle',
        data: {},
        error: action.payload
      };
    }
  }
});
const { reducer } = blogsSlice;
export default reducer;
