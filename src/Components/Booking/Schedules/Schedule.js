import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import dbCall from "../../../helpers/environment";

const Schedule = () => {
    const [skip, setSkip] = useState(true);
    const [date, setDate] = useState('');
    const [dates, setDates] = useState([]);
    const modDate = dayjs(date).format('MM-DD-YYYY').toString()

    const onChange = (date) => {
        setDates([dayjs(date).format('MM-DD-YYYY').toString(), ...dates]);
        setDate(date)
        console.log(dayjs(date).format('MM-DD-YYYY'))
    }

    
  useEffect(() => {
      if(skip) setSkip(false);
      
          
        const handleDatePOST = async () => {
            await fetch(`${dbCall}/products/`, {
                method: "POST",
                body: JSON.stringify({
                  product: {
                    date: modDate
                  
                  },
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
                },
              })
                .then((res) => res.json())
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => console.log(error));
        }
        if (!skip) handleDatePOST();
     }, [date]);
    


    return (
        <div>
             <Calendar  calendarType='US' onChange={onChange} value={new Date()}  />
             <div>{dates.map((dateArr, i) => (<p key={i}>{dayjs(dateArr).format('MM-DD-YYYY')}</p>))}<button >Select Dates</button></div>
        </div>
    )
}

export default Schedule
