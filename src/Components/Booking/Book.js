import React, {useState} from 'react';
import dbCall from "../../helpers/environment";

const Book = ({name}) => {
    const [barberName, setBarberName] = useState();
    const [date, setDate] = useState();
    const [times, setTimes] = useState([]);

   const handleSubmit = (e) => {
       e.preventDefault();
       const fetchTimes = async () => {
        await fetch(`${dbCall}/products/${barberName}/${date}`, {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setTimes(data.time)
            })
            .catch((err) => {
              console.log(err);
            });
            console.log(times)
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
                <option value='Danny Dimes'>Danny Dimes</option>
                <option value='Johnny Jobs'>Johnny Jobs</option>
                <option value='Sammy Slice'>Sammy Slice</option>
            </select>
            <input onChange={(e) => (setDate(e.target.value))} type='date'/>
            <button type='submit'>Submit</button>
            </form>
            <h4>Available Times:</h4>
            {times.map(time => (<p key={time.id}>{time}</p>))}
        </div>
    )
}

export default Book
