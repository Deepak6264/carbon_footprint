import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardslice'; // This imports the default export from `cardslice.js`

export const store = configureStore({
  reducer: {
    card: cardReducer, // Using the default export of the reducer here
  },
});
