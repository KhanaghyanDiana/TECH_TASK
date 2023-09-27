import { createSelector } from 'reselect';

const timeLineSelector = (store) => store.timeLine;
export const selectProfessionals = createSelector(timeLineSelector, (state) => {
  return state.professionals;
});

export const selectServices = createSelector(timeLineSelector, (state) => {
  return state.services;
});

export const selectAvailableHours = createSelector(timeLineSelector, (state) => {
  return state.availableHours;
});

export const selectedDoctorOfTheService = createSelector(timeLineSelector, (state) => {
  return state.selectedDoctorOfTheService;
});



