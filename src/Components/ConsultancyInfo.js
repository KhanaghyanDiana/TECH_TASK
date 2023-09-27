import { useDispatch, useSelector } from "react-redux";
import { timeLineActions, timeLineSelectors } from "../Store/Slices/timeLine/config";
import { useEffect, useMemo } from "react";
import './styles.css'


export const ConsultancyInfo = () => {
  const dispatch = useDispatch()
  const selectConsultancy = useSelector(timeLineSelectors.selectedDoctorOfTheService)
  const selectConsultancyHour = useSelector(timeLineSelectors.selectAvailableHours)
  const selectProfessionals = useSelector(timeLineSelectors.selectProfessionals)

  useEffect(() => {
    dispatch(timeLineActions.getProfessionalsList())
  }, [])


  useEffect(() => {
    dispatch(timeLineActions.getAvailableHoursList())
  }, [])

  const availableDoctor = useMemo(() => {
    return selectProfessionals.find((item) => item.spec === selectConsultancy.spec)
  }, [selectConsultancy])


  const availableHour = useMemo(() => {
    return selectConsultancyHour.find((item) => item.spec === selectConsultancy.spec && availableDoctor.fullName === item.fullName)
  }, [selectConsultancy])


  return (
    <div>
      <div className="appointments">
        <h1>Appointments List</h1>
      </div>
      {!Array.isArray(selectConsultancy) ?
        <>
          <h2>The {selectConsultancy.spec} is {availableDoctor?.fullName}</h2>
          <h2>Available Time : {availableHour?.time}</h2>
        </>
        : <h2>Please, select service</h2>
      }

    </div>
  )
}