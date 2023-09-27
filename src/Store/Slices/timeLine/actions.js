import { TimeLine } from '../../Services/services';
import { timeLineActions } from './config';

export const getProfessionalsList = () => (dispatch, getState) => {
  try {
    const data = TimeLine.getProfessionals();
    if (data) {
      dispatch(timeLineActions.setProfessionals(data));
    }
  } catch (e) {
    console.log(e);
  }
};


export const getAvailableHoursList = () => (dispatch, getState) => {
  try {
    const data = TimeLine.getAvailable_hours();
    if (data) {
      dispatch(timeLineActions.setAvailableHours(data));
    }
  } catch (e) {
    console.log(e);
  }
};


export const getServicesList = () => (dispatch, getState) => {
  try {
    const data = TimeLine.getServices();
    if (data) {
      dispatch(timeLineActions.setServices(data));
    }
  } catch (e) {
    console.log(e);
  }
};