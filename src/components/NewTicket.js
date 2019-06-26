import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { submitTicket } from '../actions';

class NewTicket extends React.Component {
  state = {
    title      : '',
    description: '',
    type       : '',
    ressolved  : false,
    tried      : '',
    owner      : 1,
    assigned   : null,
    date       : ''
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
      this.props.submitTicket(this.state)
        .then(res => res && this.props.history.push("/list"));
    })
  }
  
  render() {
    return (
      <main className="new-ticket">
        <h2>Create New Help Ticket</h2>
        <form onSubmit={this.onSubmit}>
          <div className="header">
            <label htmlFor="title">Title:</label>
            <input value={this.state.title} type="text" name="title" onChange={this.changeHandler} id="title" required />
          </div>
          <div className="cat">
            <label htmlFor="type">Category:
            <select name="type" id="type" onChange={this.changeHandler} value={this.state.type} required>
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
            <label htmlFor="description">Description of Problem:
              <textarea value={this.state.description} type="text" name="description" onChange={this.changeHandler} id="description" placeholder="Explain problem here." required></textarea>
            </label>
            <label className="tried">Things Tried:
              <textarea value={this.state.tried} type="text" name="tried" onChange={this.changeHandler} id="tried" data-key="0" placeholder="What have your tried?" required></textarea>
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
export default connect(mapStateToProps, { submitTicket })(NewTicket);