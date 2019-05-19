import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    redirectToContacts: false
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({redirectToContacts: true})
  }

  render() {
    const from = { pathname: "/contacts" };
    const { redirectToContacts } = this.state

    if (redirectToContacts) return <Redirect to={from} />

    return (
      <div style={wrapperStyle}>
        <form onSubmit={this.onSubmit} style={formStyle}>
          <input placeholder="Name" name="name" onChange={this.onChange} value={this.state.name} />
          <input placeholder="Email" name="email" onChange={this.onChange} value={this.state.email} />
          <button className="common-button">Enter</button>
        </form>
      </div>
    )
  }
}

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const formStyle = {
  width: '50vw'
}

export default SignupForm;