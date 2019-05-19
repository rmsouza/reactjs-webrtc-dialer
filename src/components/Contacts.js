import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Contact from './Contact'

class Contacts extends Component {
  state = [
    {id: 1, name: 'Steve', email: 'steve@test.com'},
    {id: 2, name: 'Smith', email: 'smith@test.com'},
    {id: 3, name: 'Bob', email: 'bob@test.com'},
    {id: 4, name: 'Jessica', email: 'jessica@test.com'},
    {id: 5, name: 'Tony', email: 'tony@test.com'},
    {id: 6, name: 'Roger', email: 'roger@test.com'}
  ]

  render() {
    return (
      <React.Fragment>
        <Header />
          <div style={contactsStyle}>
            {
              this.state.map((user) => (
                <Contact key={user.id} user={user} />
              ))
            }
          </div>
        <Footer />
      </React.Fragment>
    )
  }
}

const contactsStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

export default Contacts