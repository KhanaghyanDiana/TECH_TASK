import { useDispatch, useSelector } from 'react-redux';
import { timeLineActions, timeLineSelectors } from '../Store/Slices/timeLine/config';
import { useEffect, useMemo, useState } from 'react';
import './styles.css';


export const DocServices = () => {
  const dispatch = useDispatch();
  const selectServices = useSelector(timeLineSelectors.selectServices);
  const [selectedService, setSelectedService] = useState();


  const findDurationOfConsultancy = useMemo(() => {
    return selectServices && selectServices.find((item) => item.spec === selectedService);
  }, [selectedService]);

  const findObjOfTheSelectedService = useMemo(() => {
    return selectServices.find((item) => item.spec === selectedService);
  }, [selectedService]);


  useEffect(() => {
    (() => {
      dispatch(timeLineActions.getServicesList());

    })();
  }, []);
  useEffect(() => {
    (() => {
      if (findObjOfTheSelectedService) {
        dispatch(timeLineActions.setSelectedDoctor(findObjOfTheSelectedService));
      }
    })();
  }, [selectedService]);
  const handleSelectService = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <>
      <div>
        <select className='selector' onChange={handleSelectService} name='services'>
          {
            selectServices && selectServices.map((item) => {
              return (
                <option key={item.id} value={item.spec}>{item.spec}</option>
              );
            })
          }

        </select>
      </div>
      {selectedService &&
        <>
          <h1 className='title'>
            Duration:{findDurationOfConsultancy && findDurationOfConsultancy.duration}
          </h1>
          <h1 className='title'>
            Price: {findDurationOfConsultancy && findDurationOfConsultancy.price}
          </h1>
        </>
      }
    </>
  );
};