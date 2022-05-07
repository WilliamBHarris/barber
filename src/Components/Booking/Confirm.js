import React from 'react'
import dayjs from "dayjs";
import dbCall from "../../helpers/environment";
import '../Booking/Confirm.css'

const Confirm = ({setConfirmApp, userId, setOpen, time, barberName, dateSelect, setBooked, booked, name, id}) => {
    const date = dayjs(dateSelect).format("MM-DD-YYYY")

    const handleBook = (e) => {
        setBooked(!booked);
        
        e.preventDefault();
        fetch(`${dbCall}/review/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            review: {
              booked: booked,
              userName: name,
              userId: userId
            },
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
          }),
        })
          .then((res) => {
              setOpen(false)
            console.log(res);
          })
          .catch((error) => console.log(error));
      };
    

    return (
        <div className='confirmMain'>
            <div className='confirmBox'>
            <h4>Confirmation</h4>
            <div className='confirmDetails'>
            <p><b>Barber:</b> {barberName === "221c1761-16d4-4a9c-96da-88ce36aa32a0" ? 'Billy Bass' : null}</p>
            <p><b>Date:</b> {date}</p>
            <p><b>Time:</b> {time}</p>
            </div>
            <div className='confirmBtn'>
            <button onClick={handleBook}>Confirm</button>
            <button onClick={() => setConfirmApp(false)}>Cancel</button>
            </div>
            </div>
            
        </div>
    )
}

export default Confirm
