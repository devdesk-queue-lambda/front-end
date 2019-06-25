import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { updateTicket, getTicket } from '../actions';

class UpdateTicket extends React.Component {
  state = {
    title      : this.props.title,
    description: this.props.description,
    type       : this.props.type,
    ressolved  : this.props.ressolved,
    tried      : this.props.tried,
    owner      : this.props.owner,
    date       : this.props.date,
    assigned   : this.props.assigned
  }

  componentDidMount() {
    console.log('CDM');
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
    console.log(this.props.getTicket(1));
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
    console.log('this.props',this.props);
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
  error           : state.updateticket.error,
  isUpdatingTicket: state.updateticket.isSubmittingTicket,
  userID          : state.updateticket.userID,
  assigned        : state.updateticket.assigned,
  date            : state.updateticket.date,
  id              : state.updateticket.id,
  owner           : state.updateticket.owner,
  ressolved       : state.updateticket.ressolved,
  title           : state.updateticket.title,
  description     : state.updateticket.description,
  tried           : state.updateticket.tried,
  type            : state.updateticket.type
}, console.log('state',state))
export default connect(mapStateToProps, { updateTicket, getTicket })(UpdateTicket);