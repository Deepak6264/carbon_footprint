import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

// Exporting the action
export const { setFormData } = cardSlice.actions;

// Exporting the reducer (default export)
export default cardSlice.reducer;
