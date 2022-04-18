import {useState, useEffect} from 'react'
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Barbers from "./Components/Barbers/Barbers";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Book from "./Components/Booking/Book";
import dbCall from "./helpers/environment";
import Schedule from './Components/Booking/Schedules/Schedule';
import Times from "./Components/Booking/Schedules/Times"

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [user, setUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [userUpdate, setUserUpdate] = useState('')

  const updateToken = (newToken) => {
    localStorage.setItem("Authorization", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    if (localStorage.getItem("Authorization"))
      setSessionToken(localStorage.getItem("Authorization"));

    const fetchUser = async () => {
      if ((sessionToken !== "" && user.userId === "") || userUpdate === 'update') {
        await fetch(`${dbCall}/user/setUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setUser(res);
            setUserId(res.userId);
            setRole(res.role);
            setName(`${res.firstName} ${res.lastName}`);
            setUserUpdate('')
            console.log(res);
          })
          .then(() => user)
          .catch((error) => console.log(error));
      } else if (user.userId !== "" && sessionToken === "") {
        setUser({
          userId: "",
          firstName: "",
          lastName: "",
          email: "",
          role: "",
        });
      }
    };
    fetchUser();
  }, [user, sessionToken, userUpdate]);

  return (
    <div className="App">
      {/* <Router>
      <Routes>
          <Route path="/" element={<Book />} />
          </Routes></Router> */}
      {/* <Navbar />
      <Showcase />
      <About />
      <Services />
      <Barbers />
      <Register
        updateToken={updateToken}
        sessionToken={sessionToken}
        setSessionToken={setSessionToken}
      />
      <Login
        updateToken={updateToken}
        sessionToken={sessionToken}
        setSessionToken={setSessionToken}
      /> */}
      {/* <Book name={name}/> */}
      <Schedule />
      {/* <Times /> */}
    </div>
  );
}

export default App;
