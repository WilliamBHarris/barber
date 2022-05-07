import React, {useEffect, useState} from "react";
import '../Account/AccountProfile.css';
import dbCall from "../../helpers/environment";

const AccountProfile = ({ user }) => {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
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
          setItemData([data.product])
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTimes();
  }, []);


  let found = data.find(function(post, index) {
    if(post.userId === user.id)
      return true;
  });
  
  console.log(found)

  return (
    <div className="accountPageMain">
      <div className="accountPageBox">
        <div className="userInfoBox">
          <h1>
            {/* Welcome {user.firstName} {user.lastName} */}
          </h1>
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
            {found === false && <p>No appointments scheduled</p>}
              {data.map((appointment) => (user.id === appointment.userId &&
            <div className='appointments'>
            <p><b>Barber:</b> {appointment.product.userId === "221c1761-16d4-4a9c-96da-88ce36aa32a0" && 'Billy Bass'}</p>
            <p><b>Date:</b> {appointment.product.date}</p>
            <p><b>Time:</b> {appointment.time}</p>
            <button className='cancelAppointment'>Cancel Appointment</button>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
