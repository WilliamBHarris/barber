import React, {useState} from 'react';
import dbCall from "../../helpers/environment";


const Book = ({name}) => {
    const [date, setDate] = useState(new Date());
    const [barberName, setBarberName] = useState();
    const [dateSelect, setDateSelect] = useState();
    const [times, setTimes] = useState([]);
    const [dates, setDates] = useState([]);

   

   const handleSubmit = (e) => {
       e.preventDefault();
       const fetchTimes = async () => {
        await fetch(`${dbCall}/products/${barberName}/${dateSelect}`, {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
                if(data === null){
                    setTimes([])
                }
              console.log(data);
              setTimes(data.time)
            })
            .catch((err) => {
              console.log(err);
            });
       }
       fetchTimes()

    }

    return (
        <div>
            <p>Hello {name}</p>
            <p>Book an appointment:</p>
            <form onSubmit={handleSubmit}>
            <label>Choose a barber:</label>
            <select onChange={(e) => (setBarberName(e.target.value))} name='barbers' id='barbers'>
                <option value='80d66243-2d12-490d-9cd3-a0555f49491b'>Billy Bass</option>
                <option value='8227b66e-509c-4f27-a84c-99fd280546d3'>Danny Dimes</option>
                <option value='Johnny Jobs'>Johnny Jobs</option>
                <option value='Sammy Slice'>Sammy Slice</option>
            </select>
            <input onChange={(e) => (setDateSelect(e.target.value))}  type='date'/>
            <button type='submit'>Submit</button>
            </form>
            <h4>Available Times:</h4>
            {times.length === 0 ? "No available times. Try again later." : times.map((time, i) => (<><p key={i}>{time}</p><button value={time} onClick={() => {console.log(time)}}>Book</button></>))}
        </div>
    )
}

export default Book
