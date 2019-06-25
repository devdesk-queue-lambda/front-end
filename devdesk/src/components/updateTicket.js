import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { updateTicket } from '../actions';

class UpdateTicket extends React.Component {
  state = {
    title   : '',
    desc    : '',
    type    : '',
    resolved: false,
    tried   : '',
    owner   : 1,
    date    : '',
    assigned: null
  }

  componentDidMount() {
    if(this.props.userID === "") {
      this.setState({
        ...this.state,
        owner: parseInt(localStorage.getItem('userID'))
      })
    } else {
      this.setState({
        ...this.state,
        owner: this.props.userID
      })
    }
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      date: new Date()
    }, () => {
      this.props.updateTicket(this.state)
        .then(res => res && this.props.history.push("/user"));
    })
  }
  
  render() {
    return (
      <main className="new-ticket">
        <h2>Create New Help Ticket</h2>
        <form onSubmit={this.onSubmit}>
          <div className="header">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" onChange={this.changeHandler} id="title" />
          </div>
          <div className="cat">
            <label htmlFor="type">Category:
            <select name="type" id="type" onChange={this.changeHandler}>
              <option value="">select category</option>
              <option value="login">login</option>
              <option value="grade">grade</option>
              <option value="javascript">javascript</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="react">react</option>
              <option value="redux">redux</option>
              <option value="financial-aid">financial-aid</option>
              <option value="student-support">student-support</option>
              <option value="general">general</option>
            </select></label>
          </div>
          <div className="textareas">
            <label htmlFor="desc">Description of Problem:
              <textarea type="text" name="desc" onChange={this.changeHandler} id="desc" placeholder="Explain problem here."></textarea>
            </label>
            <label className="tried">Things Tried:
              <textarea type="text" name="tried" onChange={this.changeHandler} id="tried" data-key="0" placeholder="What have your tried?"></textarea>
            </label>
          </div>
          <button type="submit">
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />
            ) : (
              "Submit Ticket"
            )}
          </button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  error: state.newTicket.error,
  isSubmittingTicket: state.newTicket.isSubmittingTicket,
  userID: state.login.userID
})
export default connect(mapStateToProps, { submitTupdateTicketicket })(UpdateTicket);