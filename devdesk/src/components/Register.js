import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { register } from '../actions';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    authType : 'user'
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.register(this.state);
      //.then(res => res && this.props.history.push("/user"));
  }

  render() {
    return (
      <main className="register">
      <h2>Create an account for DevDesk Queue</h2>
        <form className="register" onSubmit={this.onSubmit}>
          <label htmlFor="username">
            <input type="text"     name="username" onChange={this.changeHandler} value={this.state.username} id="username" placeholder="Username" required />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} id="password" placeholder="Password" required />
          </label>
          <button>
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </main>
    );
  }
}


const mapStateToProps = state => ({
  error: state.register.error,
  isRegistering: state.register.isRegistering
})

export default connect(mapStateToProps, { register })(Register);