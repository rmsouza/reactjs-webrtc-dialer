import React from 'react'
import avatar from '../logo.svg'
import ContactInfo from './ContactInfo'
import CallButton from './CallButton'

function Contact(props) {
  return (
    <div style={contactStyle} className="contact">
      <img src={avatar} className="avatar" alt="avatar" />
      <ContactInfo user={props.user} />
      <CallButton user={props.user} />
    </div>
  )
}

const contactStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '50%',
  cursor: 'pointer',
  borderBottom: 'solid 1px #f2f2f2',
  padding: '10px'
}

export default Contact