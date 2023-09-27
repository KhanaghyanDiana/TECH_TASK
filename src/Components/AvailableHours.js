import { useDispatch, useSelector } from 'react-redux';
import { timeLineActions, timeLineSelectors } from '../Store/Slices/timeLine/config';
import './styles.css';
import { useEffect, useState } from 'react';


export const AvailableHours = () => {
  const dispatch = useDispatch();
  const selectHours = useSelector(timeLineSelectors.selectAvailableHours);
  const [_, setSelectedHour] = useState();
  const selectConsultancy = useSelector(timeLineSelectors.selectedDoctorOfTheService);
  
  useEffect(() => {
    (() => {
      dispatch(timeLineActions.getAvailableHoursList());
    })();
  }, []);

  const handleSelectAvailableHour = (e) => {
    setSelectedHour(e.target.value);
  };

  return (
    <>
      <select disabled={!Array.isArray(selectConsultancy)} className='selector' onChange={handleSelectAvailableHour}
              name='hours'>
        {
          selectHours.map((item) => {
            return (
              <option key={item.id} value={item.time}>{item.time}</option>
            );
          })}
      </select>

    </>
  );
};