import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Confirm from "./Components/Booking/Confirm";
import AccountProfile from "./Components/Account/AccountProfile";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Book from "./Components/Booking/Book";
import dbCall from "./helpers/environment";
import Schedule from "./Components/Booking/Schedules/Schedule";
import Times from "./Components/Booking/Schedules/Times";
import Main from "./Main";
import Drawer from "@material-ui/core/Drawer";

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
  const [userUpdate, setUserUpdate] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const updateToken = (newToken) => {
    localStorage.setItem("Authorization", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    if (localStorage.getItem("Authorization"))
      setSessionToken(localStorage.getItem("Authorization"));

    const fetchUser = async () => {
      if (
        (sessionToken !== "" && user.userId === "") ||
        userUpdate === "update"
      ) {
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
            setEmail(res.email);
            setUserId(res.userId);
            setRole(res.role);
            setName(`${res.firstName} ${res.lastName}`);
            setUserUpdate("");
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
      <Drawer
        className="drawer"
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <Book userId={userId} sessionToken={sessionToken} setOpen={setOpen} name={name} />
      </Drawer>
      <Navbar role={role} sessionToken={sessionToken} />
      <Routes>
        <Route path="/" element={<Main setOpen={setOpen} open={open} />} />
        <Route path="/" element={<Confirm userId={userId}/>} />
        <Route path="/accountProfile" element={<AccountProfile user={user} />} />
        <Route
          path="/schedule"
          element={<Schedule email={email} userId={userId} name={name} />}
        />
        <Route path="/times" element={<Times userId={userId} email={email} name={name} />} />
        <Route
          path="/login"
          element={
            <Login
              updateToken={updateToken}
              sessionToken={sessionToken}
              setSessionToken={setSessionToken}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              updateToken={updateToken}
              sessionToken={sessionToken}
              setSessionToken={setSessionToken}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
