// Cấu hình Redux Store

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';
import userReducer from './slices/UserSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export default store;
