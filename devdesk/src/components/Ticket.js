import React from 'react';

class Ticket extends React.Component {
  state = {
    editEnabled: false
  }

  render() {
    return (
      <div>
        {this.state.editEnabled ?
          (
            <div>editable state</div>
          )
        :
          (
            <div>ticket display not editable</div>
          )
        }
      </div>
    );
  }
}

export default Ticket;