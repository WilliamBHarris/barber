import React from 'react';
import dbCall from '../../helpers/environment';
import { Link } from 'react-router-dom'
import '../../Components/Auth/Login.css'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      passwordhash: '',
      user: '',
      sessionToken: this.props.sessionToken,
      setSessionToken: this.props.setSessionToken,
      updateToken: this.props.updateToken,
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }


  loginUser = async (e) => {
    e.preventDefault();

    await fetch(`${dbCall}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.state.email,
          passwordhash: this.state.passwordhash,
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      console.log(json.user.id)
      this.props.updateToken(json.sessionToken);
      this.props.setSessionToken(json.sessionToken)
      this.setState({
        user: json.user.id
      });
    })
    .catch(error => console.log(error))
  }
  
  render() {
      return (
        <div className='loginMain'>
          <div className='formTitle'>Login</div>
          <p className='formDescription'>Welcome back! Please enter your email and password.</p>
          <form className="formBox" onSubmit={this.loginUser}>           
            <div className='inputTitle'>Email:</div>
            <input
            className='inputBox'
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <div className='inputTitle'>Password:</div>
            <input
              className='inputBox'
              type="password"
              name="passwordhash"
              value={this.state.passwordhash}
              onChange={this.handleChange}
              required
            />                     
            <br/>
            <button className="formBtn" type="submit">Login</button>
          </form>
          <p className="alreadyUser">
              Haven't signed up yet? Sign up
              <span className="link">
                <Link className="aLink" to="/register">
                  here
                </Link>
              </span>
              !
            </p>
        </div>
      )
  }
}

export default Login;
