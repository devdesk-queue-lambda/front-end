import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { updateTicket, getTicket } from '../actions';

class UpdateTicket extends React.Component {
  state = {
    id         : this.props.id,
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
    this.props.getTicket(this.props.match.params.id)
      .then(res => this.setState({
        id         : this.props.id,
        title      : this.props.title,
        description: this.props.description,
        type       : this.props.type,
        ressolved  : this.props.ressolved,
        tried      : this.props.tried,
        owner      : this.props.owner,
        date       : this.props.date,
        assigned   : this.props.assigned
      }));
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    console.log('onsubmit', this.state);
    this.setState({
      ...this.state,
      date: new Date()
    }, () => {
      console.log('submit ticket');
      this.props.updateTicket(this.state);
    })
  }
  
  render() {
    console.log('render this.state',this.state);
    return (
      <main className="new-ticket">
        <h2>Create New Help Ticket</h2>
        <form onSubmit={this.onSubmit}>
          <div className="header">
            <label htmlFor="title">Title:</label>
            <input value={this.state.title} type="text" name="title" onChange={this.changeHandler} id="title" />
          </div>
          <div className="cat">
            <label htmlFor="type">Category:
            <select name="type" id="type" onChange={this.changeHandler} value={this.state.type}>
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
              <option value="Test">Test</option>
            </select></label>
          </div>
          <div className="textareas">
            <label htmlFor="description">Description of Problem:
              <textarea value={this.state.description} type="text" name="description" onChange={this.changeHandler} id="description" placeholder="Explain problem here."></textarea>
            </label>
            <label className="tried">Things Tried:
              <textarea value={this.state.tried} type="text" name="tried" onChange={this.changeHandler} id="tried" data-key="0" placeholder="What have your tried?"></textarea>
            </label>
          </div>
          <button type="submit">
            {this.props.isUpdatingTicket ? (
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
  assigned        : state.updateticket.assigned,
  date            : state.updateticket.date,
  id              : state.updateticket.id,
  owner           : state.updateticket.owner,
  ressolved       : state.updateticket.ressolved,
  title           : state.updateticket.title,
  description     : state.updateticket.description,
  tried           : state.updateticket.tried,
  type            : state.updateticket.type
})
export default connect(mapStateToProps, { updateTicket, getTicket })(UpdateTicket);