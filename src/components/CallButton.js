import React, { Component } from 'react'
import PropTypes from 'prop-types'
import phone from '../phone.svg'

class CallButton extends Component {
  makeCall = () => {
    console.log(this.props.user);
  }

  render() {
    return (
      <button onClick={this.makeCall} className="round-button call-button">
        <img src={phone} />
      </button>
    )
  }
}

CallButton.propTypes = {
  user: PropTypes.object.isRequired
}

export default CallButton;