import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';
import Loader from 'react-loader-spinner';

class Home extends React.Component {
  state = {
    username: '',
    password: ''
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state)
      .then(res => res && this.props.history.push("/user"));
  }

  render() {
    return (
      <main className="home">
        {
          !localStorage.getItem("token") ?
            (
              <>
              <h2>Login</h2>
              <form className="login" onSubmit={this.onSubmit}>
                <label htmlFor="username">
                  <input type="text"     name="username" onChange={this.changeHandler} value={this.state.username} id="username" placeholder="Username" required />
                </label>
                <label htmlFor="password">
                  <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} id="password" placeholder="Password" required />
                </label>
                {
                  (this.props.error && this.props.errorInfo === 401) && (
                    <div className="error">Your Username or Password<br />was incorrect.</div>
                  )
                }
                <button>
                  {this.props.isLoggingIn ? (
                    <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
              </>
            )
          :
            (
              <Redirect to="/UserHome" />
            )
        }
      </main>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  errorInfo: state.login.errorInfo,
  isLoggingIn: state.login.isLoggingIn
});

export default connect( mapStateToProps, { login })(Home);
>>>>>>> be010779df34a39181e565889ae8d0f6f865dbbb:devdesk/src/components/Home.js
