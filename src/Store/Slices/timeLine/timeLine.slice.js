import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  professionals: [],
  availableHours: [],
  services: [],
  selectedDoctorOfTheService: [],
};


export const timeLine = createSlice({
  name: 'timeLine',
  initialState,
  reducers: {
    setProfessionals: (state, action) => {
      return {
        ...state,
        professionals: action.payload,
      };
    },
    setAvailableHours: (state, action) => {
      return {
        ...state,
        availableHours: action.payload,
      };
    },
    setServices: (state, action) => {

      return {
        ...state,
        services: action.payload,
      };
    },
    setSelectedDoctor: (state, action) => {
      return {
        ...state,
        selectedDoctorOfTheService: action.payload,
      };
    },
  },
});