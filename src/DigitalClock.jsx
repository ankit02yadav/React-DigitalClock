import './DigitalClock.css'
import React, {useState,useEffect} from 'react';
function DigitalClock(){
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return()=>{
            clearInterval(IntervalId);
        };
    },[])

    function formateTime(){
        let hour = time.getHours();
        const minute = time.getMinutes();
        const sec = time.getSeconds();
        const meridium = hour>= 12? "AM":"PM";

        hour = hour %12 || 12;
        return`${padZero(hour)}:${padZero(minute)}:${padZero(sec)} ${padZero(meridium)}`
    }
    function padZero(number){
        return (number < 10 ? "0" : "" )+number;

    }
    return(
        <div className="container">
            <div className="time">{formateTime()}</div>
        </div>
    );
}
export default DigitalClock