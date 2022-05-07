import React, { useState, useEffect } from "react";
import dbCall from "../../../helpers/environment";
import "../../Booking/Schedules/Times.css";





const Times = ({ id, setUpdate, update, userId}) => {
  const [run, setRun] = useState(true);
  const [time, setTime] = useState("");
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    if (run || update) {
      const fetchStaffTimes = async () => {
        await fetch(`${dbCall}/products/${id}`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            setTimer([...res.reviews]);
            setRun(true)
            setUpdate(false);
          })
          .catch((error) => console.log(error));
      };
      fetchStaffTimes();
    } else {
      setRun(false);
    }
  }, [run, update]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${dbCall}/review/${id}`, {
      method: "POST",
      body: JSON.stringify({
        review: {
          time: time,
          booked: false,
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
      .then(() => {
        setRun(false);
        setUpdate(true);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (e) => {
    setTime(e.target.value);
    setRun(true);
    setUpdate(true);
  };
  
  let arr = []
  for(let x in timer){
    arr.push(timer[x].time)
  }

  return (
    <div className="timesMain">      
      <form onSubmit={handleSubmit}>
        <button
        style={{background: arr.includes('12:00am') ? 'red' : 'black', pointerEvents: arr.includes('12:00am') ? 'none' : 'auto', cursor: arr.includes('12:00am') ? 'none' : 'pointer'}}
          value="12:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          12:00am
        </button>

        <button
        style={{background: arr.includes('12:30am') ? 'red' : 'black', pointerEvents: arr.includes('12:30am') ? 'none' : 'auto', cursor: arr.includes('12:30am') ? 'none' : 'pointer'}}
          value="12:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          12:30am
        </button>
        <button
        style={{background: arr.includes('1:00am') ? 'red' : 'black', pointerEvents: arr.includes('1:00am') ? 'none' : 'auto', cursor: arr.includes('1:00am') ? 'none' : 'pointer'}}
          value="1:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          1:00am
        </button>
        <button
        style={{background: arr.includes('1:30am') ? 'red' : 'black', pointerEvents: arr.includes('1:30am') ? 'none' : 'auto', cursor: arr.includes('1:30am') ? 'none' : 'pointer'}}
          value="1:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          1:30am
        </button>
        <button
        style={{background: arr.includes('2:00am') ? 'red' : 'black', pointerEvents: arr.includes('2:00am') ? 'none' : 'auto', cursor: arr.includes('2:00am') ? 'none' : 'pointer'}}
          value="2:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          2:00am
        </button>
        <button
        style={{background: arr.includes('2:30am') ? 'red' : 'black', pointerEvents: arr.includes('2:30am') ? 'none' : 'auto', cursor: arr.includes('2:30am') ? 'none' : 'pointer'}}
          value="2:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          2:30am
        </button>
        <button
        style={{background: arr.includes('3:00am') ? 'red' : 'black', pointerEvents: arr.includes('3:00am') ? 'none' : 'auto', cursor: arr.includes('3:00am') ? 'none' : 'pointer'}}
          value="3:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          3:00am
        </button>
        <button
        style={{background: arr.includes('3:30am') ? 'red' : 'black', pointerEvents: arr.includes('3:30am') ? 'none' : 'auto', cursor: arr.includes('3:30am') ? 'none' : 'pointer'}}
          value="3:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          3:30am
        </button>
        <button
        style={{background: arr.includes('4:00am') ? 'red' : 'black', pointerEvents: arr.includes('4:00am') ? 'none' : 'auto', cursor: arr.includes('4:00am') ? 'none' : 'pointer'}}
          value="4:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          4:00am
        </button>
        <button
        style={{background: arr.includes('4:30am') ? 'red' : 'black', pointerEvents: arr.includes('4:30am') ? 'none' : 'auto', cursor: arr.includes('4:30am') ? 'none' : 'pointer'}}
          value="4:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          4:30am
        </button>
        <button
                style={{background: arr.includes('5:00am') ? 'red' : 'black', pointerEvents: arr.includes('5:00am') ? 'none' : 'auto', cursor: arr.includes('5:00am') ? 'none' : 'pointer'}}
          value="5:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          5:00am
        </button>
        <button
                style={{background: arr.includes('5:30am') ? 'red' : 'black', pointerEvents: arr.includes('5:30am') ? 'none' : 'auto', cursor: arr.includes('5:30am') ? 'none' : 'pointer'}}
          value="5:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          5:30am
        </button>
        <button
                style={{background: arr.includes('6:00am') ? 'red' : 'black', pointerEvents: arr.includes('6:00am') ? 'none' : 'auto', cursor: arr.includes('6:00am') ? 'none' : 'pointer'}}
          value="6:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          6:00am
        </button>
        <button
                style={{background: arr.includes('6:30am') ? 'red' : 'black', pointerEvents: arr.includes('6:30am') ? 'none' : 'auto', cursor: arr.includes('6:30am') ? 'none' : 'pointer'}}
          value="6:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          6:30am
        </button>
        <button
                style={{background: arr.includes('7:00am') ? 'red' : 'black', pointerEvents: arr.includes('7:00am') ? 'none' : 'auto', cursor: arr.includes('7:00am') ? 'none' : 'pointer'}}
          value="7:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          7:00am
        </button>
        <button
                style={{background: arr.includes('7:30am') ? 'red' : 'black', pointerEvents: arr.includes('7:30am') ? 'none' : 'auto', cursor: arr.includes('7:30am') ? 'none' : 'pointer'}}
          value="7:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          7:30am
        </button>
        <button
                style={{background: arr.includes('8:00am') ? 'red' : 'black', pointerEvents: arr.includes('8:00am') ? 'none' : 'auto', cursor: arr.includes('8:00am') ? 'none' : 'pointer'}}
          value="8:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          8:00am
        </button>
        <button
                style={{background: arr.includes('8:30am') ? 'red' : 'black', pointerEvents: arr.includes('8:30am') ? 'none' : 'auto', cursor: arr.includes('8:30am') ? 'none' : 'pointer'}}
          value="8:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          8:30am
        </button>
        <button
                style={{background: arr.includes('9:00am') ? 'red' : 'black', pointerEvents: arr.includes('9:00am') ? 'none' : 'auto', cursor: arr.includes('9:00am') ? 'none' : 'pointer'}}
          value="9:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          9:00am
        </button>
        <button
                style={{background: arr.includes('9:30am') ? 'red' : 'black', pointerEvents: arr.includes('9:30am') ? 'none' : 'auto', cursor: arr.includes('9:30am') ? 'none' : 'pointer'}}
          value="9:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          9:30am
        </button>
        <button
        style={{background: arr.includes('10:00am') ? 'red' : 'black', pointerEvents: arr.includes('10:00am') ? 'none' : 'auto', cursor: arr.includes('10:00am') ? 'none' : 'pointer'}}
          value="10:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          10:00am
        </button>
        <button
        style={{background: arr.includes('10:30am') ? 'red' : 'black', pointerEvents: arr.includes('10:30am') ? 'none' : 'auto', cursor: arr.includes('10:30am') ? 'none' : 'pointer'}}
          value="10:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          10:30am
        </button>
        <button
        style={{background: arr.includes('11:00am') ? 'red' : 'black', pointerEvents: arr.includes('11:00am') ? 'none' : 'auto', cursor: arr.includes('11:00am') ? 'none' : 'pointer'}}
          value="11:00am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          11:00am
        </button>
        <button
        style={{background: arr.includes('11:30am') ? 'red' : 'black', pointerEvents: arr.includes('11:30am') ? 'none' : 'auto', cursor: arr.includes('11:30am') ? 'none' : 'pointer'}}
          value="11:30am"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          11:30am
        </button>
      </form>

      <h4>Times Selected:</h4>
      {timer.map((timer, i) => (
        <div className="selectedTimes" key={i + 1}>
          <p className="bookedTime" key={i}>
            {timer.time}
          </p>
          {timer.booked && (
            <p className="bookedName" key={timer.id}>
              Booked by: {timer.userName}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Times;
