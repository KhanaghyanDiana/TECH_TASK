import {Professionals} from "./Professionals";
import {AvailableHours} from "./AvailableHours";
import {DocServices} from "./DocServices";
import './styles.css'
import {ConsultancyInfo} from "./ConsultancyInfo";

export const SideBar =()=>{
    return (
        <div  className='timeline' >
            <div className="side_block">
                <div>
                    <DocServices/>
                </div>
                <div>
                    <Professionals/>
                </div>
                <div>
                    <AvailableHours/>
                </div>
            </div>
            <div className="appointments_block">
                <ConsultancyInfo/>
            </div>
        </div>


    )
}