import React, {useState, useEffect} from 'react';
import dbCall from "../../../helpers/environment";

const Times = ({id, setUpdate, update}) => {
    const [run, setRun] = useState(true)
    const [time, setTime] = useState([])
    const [timer, setTimer] = useState([])
    let times = [time];

    useEffect(() => {
      if(run || update ) {
    const fetchStaffTimes = async () => {
      await fetch(`${dbCall}/products/${id}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTimer([...res.reviews])
          setRun(true)
          setUpdate(false)
        })
        .catch((error) => console.log(error));
    };
    fetchStaffTimes() } else {setRun(false)}
    }, [run, update])


    const handleSubmit = async (e) => {
       e.preventDefault()
        await fetch(`${dbCall}/review/${id}`, {
            method: "POST",
            body: JSON.stringify({
              review: {
                time: times,
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
              setRun(false)               
            })
            .catch((error) => console.log(error));
        };

        const handleClick = () => {
          setRun(true);
          setUpdate(true);
        }

        // const handleDelete = async () => {
        //   await fetch(`${dbCall}/review/${id}`, {
        //     method: "DELETE",
        //     headers: new Headers({
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        //     }),
        //   }).then(() => {
        //     // setUpdate(true)
        //   });
        // };
    

        
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <select onChange={(e) => setTime(e.target.value)}>
                <option value="03:00:00">3:00pm</option>
                <option value='03:30:00'>3:30pm</option>
                <option value='04:00:00'>4:00pm</option>
                <option value='04:30:00'>4:30pm</option>
            </select>
            {time}
            <button onClick={() => {handleClick()} } type='submit'>Submit</button>
            </form>
            
            <h4>Times Selected:</h4>
            {timer.map((timer, i) => (<p key={i}>{timer.time}</p>))}
        </div>
    )
}

export default Times
