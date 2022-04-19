import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import dbCall from "../../../helpers/environment";
import Times from "../../Booking/Schedules/Times";

const Schedule = ({name, userId, email}) => {
  const [skip, setSkip] = useState(true);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState([]);
  const modDate = dayjs(date).format("YYYY-MM-DD").toString();
  const [run, setRun] = useState(true);
  const [times, setTimes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [deleteID, setDeleteID] = useState('');

  const onChange = (date) => {
    setDates([dayjs(date).format("YYYY-MM-DD").toString(), ...dates]);
    setDate(date);
    console.log(dayjs(date).format("MM-DD-YYYY"));
  };

  useEffect(() => {
    if (run || update  ) {
      const fetchTimes = async () => {
        await fetch(`${dbCall}/products/`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setDates(data);
            setUpdate(false)
            setRun(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchTimes();
    }
  }, [run, update, deleteID]);

  useEffect(() => {
    if (skip) setSkip(false);
    if (modDate !== "Invalid Date") {
      const handleDatePOST = async () => {
        await fetch(`${dbCall}/products/`, {
          method: "POST",
          body: JSON.stringify({
            product: {
              date: modDate,
              email: email
            },
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setRun(true);
            setDeleteID('RUN')
            console.log(res);
            console.log(dates);
          })
          .catch((error) => console.log(error));
      };
      if (!skip) handleDatePOST();
    }
  }, [date]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await fetch(`${dbCall}/products/${deleteID}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      }),
    }).then(() => {
      setUpdate(true)
    });
  };


  return (
    <div>
      <h1>Make a schedule</h1>
      <p>Logged in as: {name}</p>
      <Calendar calendarType="US" onChange={onChange} value={new Date()} />
      <div>
       {dates ? dates.map((date, i) => (
          // REMOVE INLINE STYLING!!!!!
          date.userId !== userId ? null : <div style={{border: '1px solid black', marginTop: '20px'}} key={date.id + 0.01}>
            <p key={i}>{date.date}</p>
            
            <form onSubmit={handleDelete}>
            <button onClick={() => {setDeleteID(date.id)}} type='submit'>Delete</button>
            </form>
            <Times
              key={date.id + 1}
              userId={date.userId}
              id={date.id}
              setUpdate={setUpdate}
              update={update}
            />            
          </div>
        )) : 'No dates selected'}
      </div>
    </div>
  );
};

export default Schedule;
