import React, {useEffect, useState} from "react";
import '../Account/AccountProfile.css';
import dbCall from "../../helpers/environment";

const AccountProfile = ({ user }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [itemId, setItemId] = useState('');
  const [refresh, setRefresh] = useState('')

  useEffect(() => { 
    const fetchTimes = async () => { (refresh === 'refresh' || data) &&
      await fetch(`${dbCall}/review/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData([...data])
          setRefresh('')
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTimes();
  }, [refresh]);


  let found = data.find(checkAppointment)
  
  function checkAppointment(post) {
    if(post.userId === user.id)
     return true
  };

  console.log(found)

  const handleCancel = () => {
     setToggle(!toggle);
  }

  const confirmCancel = async () => {
    await fetch(`${dbCall}/review/${itemId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      }),
    }).then(() => {
      setItemId("");
      setToggle(!toggle);
      setRefresh('refresh');
    });
  }


  return (
    <div className="accountPageMain">
      <div className="accountPageBox">
        <div className="userInfoBox">
          <div className='accountPageInfo'>
          <h3>Account Information</h3>
          <img alt='user' className='userImage' src={user.image === '' ? 'https://robohash.org/mail@ashallendesign.co.uk' : user.image} />
          <p><b>Name:</b> {user.firstName} {user.lastName}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Location:</b> {user.location}</p>
          <button className='profileBtn'>Edit Profile</button>
          </div>
        </div>
        <div className="appointmentBox">
            <h2>Upcoming Appointments</h2>
            {!found &&  <p>No appointments scheduled</p>}
              {data.map((appointment) => (user.id === appointment.userId &&
            <div className='appointments'>
            <p><b>Barber:</b> {appointment.product.userId === "221c1761-16d4-4a9c-96da-88ce36aa32a0" && 'Billy Bass'}</p>
            <p><b>Date:</b> {appointment.product.date}</p>
            <p><b>Time:</b> {appointment.time}</p>
            <button onClick={() =>{setItemId(appointment.id); handleCancel()} } className='cancelAppointment'>Cancel Appointment</button>
            {toggle && 
            <div className='cancelConfirm'>
              <h3>Confirm Cancellation</h3>
              <p>Are you sure you want to cancel your appointment on {appointment.product.date} @ {appointment.time}?</p>
              <p>You may not be able to reschedule this time.</p>
              <div className='btnAlign'>
              <button onClick={confirmCancel} className='cancelBtn'>Cancel</button>
              <button onClick={() => setToggle(!toggle)} className='keepBtn'>Keep</button>
              </div>
            </div>
            }
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
