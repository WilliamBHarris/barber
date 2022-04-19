import React, {useState} from 'react';
import dbCall from "../../helpers/environment";


const Book = ({name}) => {
    const [id, setId] = useState();
    const [barberName, setBarberName] = useState();
    const [dateSelect, setDateSelect] = useState();
    const [times, setTimes] = useState({});
    const [booked, setBooked] = useState(true);
    const [run, setRun] = useState(false)
    const [allTimes, setAllTimes] = useState([])   

   const handleSubmit = (e) => {
     setRun(true)
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
                setTimes(data)
                setAllTimes(data.reviews)
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
       }
       fetchTimes()

    }

    const handleBook = (e) => {
      setBooked(!booked)
      e.preventDefault();
      console.log(times.id)
      console.log(name)
      fetch(`${dbCall}/review/${id}`, {
         method: 'PUT',
         body: JSON.stringify({
           review: {
             booked: booked,
             userName: name
           }
         }),
         headers: new Headers({
           'Content-Type': 'application/json',
           Authorization: `Bearer ${localStorage.getItem("Authorization")}`
         })
       })
       .then(res => {
         console.log(res)
       })
       .catch(error => console.log(error))
   }

    return (
        <div>
            <p>Hello {name}</p>
            <p>Book an appointment:</p>
            <form onSubmit={handleSubmit}>
            <label>Choose a barber:</label>
            <select onChange={(e) => (setBarberName(e.target.value))} name='barbers' id='barbers'>
                <option value='221c1761-16d4-4a9c-96da-88ce36aa32a0'>Billy Bass</option>
                <option value='4b11c9e9-4dcb-4ba2-be12-f1863abadfd4'>Danny Dimes</option>
                <option value='Johnny Jobs'>Johnny Jobs</option>
                <option value='Sammy Slice'>Sammy Slice</option>
            </select>
            <input onChange={(e) => (setDateSelect(e.target.value))}  type='date'/>
            <button type='submit'>Submit</button>
            </form>
            <h4>Available Times:</h4>
            {run === true ? allTimes.map((time, i) => (<form key={i + 1} onSubmit={handleBook} ><button style={{background: time.booked ? "red" : "blue" }} value='true' type='submit' onClick={() => {setId(time.id)}}  key={i}>{time.time}</button></form>)) : null}
        </div>
    )
}

export default Book
