import { useDispatch, useSelector } from 'react-redux';
import { timeLineActions, timeLineSelectors } from '../Store/Slices/timeLine/config';
import { useEffect, useState } from 'react';
import './styles.css';

export const Professionals = () => {
  const dispatch = useDispatch();
  const selectProfs = useSelector(timeLineSelectors.selectProfessionals);
  const [_, setSelectedDoctor] = useState();
  const selectConsultancy = useSelector(timeLineSelectors.selectedDoctorOfTheService);

  useEffect(() => {
    (() => {
      dispatch(timeLineActions.getProfessionalsList());

    })();
  }, []);
  const handleSelectDoctor = (e) => {
    setSelectedDoctor(e.target.value);

  };

  return (
    <>
      <select disabled={!Array.isArray(selectConsultancy)} className='selector' onChange={handleSelectDoctor}
              name='professionals'>
        {
          selectProfs?.map((item) => {
            return (
              <option key={item.id} value={item.fullName}>{item.fullName}</option>
            );
          })
        }

      </select>

    </>
  );
};