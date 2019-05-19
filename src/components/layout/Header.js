import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>React Video Calls</h1>
    </header>
  );
}

const headerStyle = {
  padding: '20px',
  backgroundColor: '#ff2200',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '15px'
}

export default Header
