import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
    const from = { pathname: "/contacts" }
    const { redirectToContacts } = this.state

    if (redirectToContacts) return <Redirect to={from} />

    return (
      <div style={styles.wrapper}>
        <form style={styles.form}>
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />

          <TextField
            id="outlined-name"
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />

          <Button size="large" onClick={this.onSubmit} variant="contained" color="primary" fullWidth={true}>
            Enter
          </Button>
        </form>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  form: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

export default SignupForm;