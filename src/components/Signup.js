import React from 'react'
import SignupForm from './SignupForm'
import Header from './layout/Header'
import Footer from './layout/Footer'

function Signup() {
	return ( 
    <div style={signupStyle}>
      <Header />
        <p style={paragraphStyle}>Type your name and email before start make calls</p>
        <SignupForm />
      <Footer />
    </div>
  );
}

const signupStyle = {
	textAlign: 'center',
}

const paragraphStyle = {
  margin: '10px'
}

export default Signup;