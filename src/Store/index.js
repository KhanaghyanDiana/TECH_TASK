import { configureStore } from '@reduxjs/toolkit';
import { timeLine } from './Slices/timeLine/timeLine.slice';

export const store = configureStore({
  reducer: {
    [timeLine.name]: timeLine.reducer,
  },
});



