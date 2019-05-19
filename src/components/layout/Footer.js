import React from 'react'

function Footer() {
  return (
    <div style={footerStyle}>
      Made with ❤ by Rafael de Souza
    </div>
  )
}

const footerStyle = {
  backgroundColor: '#ccc',
  padding: '10px',
  textAlign: 'center',
  marginTop: '10px'
}

export default Footer;