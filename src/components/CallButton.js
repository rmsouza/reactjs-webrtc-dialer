import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import CallIcon from '@material-ui/icons/Call'
import green from '@material-ui/core/colors/green'

class CallButton extends Component {
  state = {
    redirectToCall: false
  }

  makeCall = () => {
    this.setState({redirectToCall: true})
  }

  render() {
    const to = { pathname: "/call" }
    const { redirectToCall } = this.state

    if (redirectToCall) return <Redirect to={to} />

    return (
      <Fab color="primary" onClick={this.props.makeCall || this.makeCall} style={{background: green[500]}} aria-label="Make a Call">
        <CallIcon />
      </Fab>
    )
  }
}

CallButton.propTypes = {
  user: PropTypes.object.isRequired
}

export default CallButton;