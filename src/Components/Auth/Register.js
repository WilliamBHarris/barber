import React from "react";
import dbCall from "../../helpers/environment";
import {Link} from 'react-router-dom'
import '../../Components/Auth/Register.css'



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
      role: 'general',
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
          role: this.state.role
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
      <div className='registerMain'>
        <div className="homeLogo"></div>
        <div className="homeLogo2"></div>
        <div className='registerBox'>
          <div className='formTitle'>Sign Up</div>
          <p className='formDescription'>Welcome to Barber. Signup to book an appointment!</p>
          <form className="formBox" onSubmit={this.registerUser}>
            <div className='inputTitle'>First Name</div>
            <input
            className='inputBox'
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <div className='inputTitle'>Last Name</div>
            <input
            className='inputBox'
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <div className='inputTitle'>Email</div>
            <input
            className='inputBox'
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <div className='inputTitle'>Password</div>
            <input
              className='inputBox'
              type="password"
              name="passwordhash"
              value={this.state.passwordhash}
              onChange={this.handleChange}
              required
            />
           {/* <div>image</div>
             <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <div>location</div>
            <input
              type="location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            /> */}
                      <input 
                      className="hideRole"
              type="role"
              name="role"
              value={this.state.role}
              readOnly
            />
            <br/>
            <button className="formBtn" type="submit">Register</button>
          </form>
          <p className="alreadyUser">
              Already a user? Login
              <span className="link">
                <Link className="aLink" to="/login">
                  here
                </Link>
              </span>
              !
            </p>
        </div>
      </div>
    );
  }
}

export default Register;