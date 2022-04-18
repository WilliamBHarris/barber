import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import dbCall from "../../../helpers/environment";
import Times from "../../Booking/Schedules/Times";

const Schedule = () => {
  const [skip, setSkip] = useState(true);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState([]);
  const modDate = dayjs(date).format("MM-DD-YYYY").toString();
  const [run, setRun] = useState(true);
  const [times, setTimes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [deleteID, setDeleteID] = useState('');

  const onChange = (date) => {
    setDates([dayjs(date).format("MM-DD-YYYY").toString(), ...dates]);
    setDate(date);
    console.log(dayjs(date).format("MM-DD-YYYY"));
  };

  useEffect(() => {
    if (run) {
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
            setDates(data);

            setRun(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchTimes();
    }
  }, [modDate, date, run]);

  useEffect(() => {
    if (skip) setSkip(false);
    if (modDate !== "Invalid Date") {
      const handleDatePOST = async () => {
        await fetch(`${dbCall}/products/`, {
          method: "POST",
          body: JSON.stringify({
            product: {
              date: modDate,
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
            console.log(res);
            console.log(dates);
          })
          .catch((error) => console.log(error));
      };
      if (!skip) handleDatePOST();
    }
  }, [date]);

  const handleDelete = async () => {
    await fetch(`${dbCall}/product/${deleteID}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      }),
    }).then(() => {
      // setUpdate(true)
    });
  };


  return (
    <div>
      <h1>Make a schedule</h1>
      <Calendar calendarType="US" onChange={onChange} value={new Date()} />
      <div>
        {dates.map((date, i) => (
          // REMOVE INLINE STYLING!!!!!
          <div style={{border: '1px solid black', marginTop: '20px'}} key={date.id + 0.01}>
           
            <p key={i}>{date.date}</p>

            <p>{date.id}</p>
            <button onClick={() => {handleDelete()}} onMouseEnter={() => {setDeleteID(date.id)}} type='submit'>Delete</button>
            {deleteID}
            <Times
              key={date.id + 1}
              userId={date.userId}
              id={date.id}
              setUpdate={setUpdate}
              update={update}
            />            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
