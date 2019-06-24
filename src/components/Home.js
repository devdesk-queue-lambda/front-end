import React from 'react';
import HelpList from './HelpList'


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

  render() {
    return (
      <div className="Home">
        this is the login/landing page
        {
          !localStorage.getItem("token") ?
            (
              <form className="login">
                <input type="text"     name="username" onChange={this.changeHandler} value={this.state.username} />
                <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} />
              </form>
            )
          :
            (
                <HelpList/>
            )
        }
      </div>
    );
  }
}

export default Home;