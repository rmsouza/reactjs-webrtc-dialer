import React from 'react'
import PropTypes from 'prop-types'

function ContactInfo(props) {
  return (
    <div style={contatInfoStyle}>
      <div>{props.user.name}</div>
      <small>{props.user.email}</small>
    </div>
  )
}

const contatInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
  width: '85%'
}

ContactInfo.propTypes = {
  user: PropTypes.object.isRequired
}

export default ContactInfo;