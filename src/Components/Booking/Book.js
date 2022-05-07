import React, { useState } from "react";
import dbCall from "../../helpers/environment";
import "../Booking/Book.css";
import Confirm from "./Confirm";

const Book = ({ name, setOpen, sessionToken, userId }) => {
  const [id, setId] = useState();
  const [barberName, setBarberName] = useState(
    "221c1761-16d4-4a9c-96da-88ce36aa32a0"
  );
  const [dateSelect, setDateSelect] = useState();
  const [times, setTimes] = useState({});
  const [booked, setBooked] = useState(true);
  const [run, setRun] = useState(false);
  const [allTimes, setAllTimes] = useState([]);
  const [confirmApp, setConfirmApp] = useState(false);
  const [confirmTime, setConfirmTime] = useState("");
  const [noTime, setNoTime] = useState('');

  const handleSubmit = (e) => {
    setRun(true);
    setNoTime('')
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
          setTimes(data);
          setAllTimes(data.reviews);
          console.log(data);
        })
        .catch((err) => {
          setNoTime('No appointments available')
          console.log(err);
        });
    };
    fetchTimes();
  };

  return (
    <div className="bookMain">
      <h4>BOOK AN APPOINTMENT</h4>
      <form onSubmit={handleSubmit}>
        <label>Choose a barber:</label>
        <select
          onChange={(e) => setBarberName(e.target.value)}
          name="barbers"
          id="barbers"
        >
          <option value="221c1761-16d4-4a9c-96da-88ce36aa32a0">
            Billy Bass
          </option>
          <option value="4b11c9e9-4dcb-4ba2-be12-f1863abadfd4">
            Danny Dimes
          </option>
          <option value="Johnny Jobs">Johnny Jobs</option>
          <option value="Sammy Slice">Sammy Slice</option>
        </select>
        <label>Choose a date:</label>
        <input
          required
          onChange={(e) => setDateSelect(e.target.value)}
          type="date"
        />
        <button type="submit">Search</button>
      </form>
      <h4>Available Times:</h4>
      {sessionToken !== '' ? <div className="availableAppButtons">
      {noTime !== ''  ? 'No appointments available' : null}
        {run === true ? (
          allTimes.map((time, i) => (
            <div>
              <button
                style={{
                  display: time.booked ? "none" : "block",
                  background: "red",
                  pointerEvents: time.booked ? "none" : "click",
                  cursor: time.booked ? "none" : "pointer",
                }}
                onClick={() => {
                  setId(time.id);
                  setConfirmTime(time.time);
                  setConfirmApp(true);
                }}
                key={i}
              >
                 {time.time}
              </button>
              {confirmApp && (
                <Confirm
                  setConfirmApp={setConfirmApp}
                  setOpen={setOpen}
                  id={id}
                  name={name}
                  booked={booked}
                  setBooked={setBooked}
                  time={confirmTime}
                  barberName={barberName}
                  dateSelect={dateSelect}
                  userId={userId}
                />
              )}
            </div>
          ))
        ) : (
          <p>Search available times</p>
        )}
      </div> : <p className='loginCheck'>Login or create an account to book an appointment</p>}
    </div>
  );
};

export default Book;
