import React from "react";
import dbCall from "../../helpers/environment";
import { Link, Navigate } from "react-router-dom";
import "../../Components/Auth/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passwordhash: "",
      user: "",
      sessionToken: this.props.sessionToken,
      setSessionToken: this.props.setSessionToken,
      updateToken: this.props.updateToken,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  loginUser = async (e) => {
    e.preventDefault();

    await fetch(`${dbCall}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.state.email,
          passwordhash: this.state.passwordhash,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json.user.id);
        this.props.updateToken(json.sessionToken);
        this.props.setSessionToken(json.sessionToken);
        this.setState({
          user: json.user.id,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="loginMain">
        <div className="loginBox">
          <h1>Login</h1>
          <p>Welcome back! Please enter your email and password.</p>
          <form onSubmit={this.loginUser}>
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
            <br />
            <div className="btn-div">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Haven't signed up yet? Sign up
            <span>
              <Link className="loginLink" to="/register">
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

export default Login;
