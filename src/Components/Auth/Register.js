import React from "react";
import dbCall from "../../helpers/environment";
import { Link, Navigate } from "react-router-dom";
import "../../Components/Auth/Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      user: "",
      role: "general",
      passwordhash: "",
      sessionToken: this.props.sessionToken,
      setSessionToken: this.props.setSessionToken,
      updateToken: this.props.updateToken,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  registerUser = async (e) => {
    e.preventDefault();

    await fetch(`${dbCall}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          passwordhash: this.state.passwordhash,
          location: this.state.location,
          image: this.state.image,
          role: this.state.role,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          user: json.user.id,
        });
        this.props.updateToken(json.sessionToken);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="registerMain">
        <div className="registerBox">
          <h1>Sign Up</h1>
          <p>Welcome to Barber. Signup to book an appointment!</p>
          <form onSubmit={this.registerUser}>
            <h4>First Name:</h4>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <h4>Last Name:</h4>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <h4>Email:</h4>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <h4>Password:</h4>
            <input
              type="password"
              name="passwordhash"
              value={this.state.passwordhash}
              onChange={this.handleChange}
              required
            />
            <input
              className="hide"
              type="role"
              name="role"
              value={this.state.role}
              readOnly
            />
            <br />
            <div className='btn-div'>
            <button type="submit">Register</button>
            </div>
          </form>
          <p>
            Already a user? Login
            <span>
              <Link className="registerLink" to="/login">
                here
              </Link>
            </span>
            !
          </p>
        </div>
        {this.state.user !== "" ? <Navigate to="/" /> : null}
      </div>
    );
  }
}

export default Register;
