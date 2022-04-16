import React, {useState} from 'react';
import dbCall from "../../../helpers/environment";

const Times = () => {
    const [time, setTime] = useState('')


    const handleSubmit = async () => {
        await fetch(`${dbCall}/review/${time}`, {
            method: "POST",
            body: JSON.stringify({
              review: {
                time: time
              },
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
            },
          })
            .then((res) => {
              console.log(res);               
            })
            .catch((error) => console.log(error));
        };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <select onChange={(e) => setTime(e.target.value)} name='barbers' id='barbers'>
                <option value='03:00:00'>3:00pm</option>
                <option value='8227b66e-509c-4f27-a84c-99fd280546d3'>Danny Dimes</option>
                <option value='Johnny Jobs'>Johnny Jobs</option>
                <option value='Sammy Slice'>Sammy Slice</option>
            </select>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Times
