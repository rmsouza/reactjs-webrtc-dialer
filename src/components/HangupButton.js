import React from 'react'
import Fab from '@material-ui/core/Fab'
import CallEndIcon from '@material-ui/icons/CallEnd'
import red from '@material-ui/core/colors/red'

function HangupButton (props) {
  return (
    <Fab color="secondary" style={{background: red[500]}} onClick={props.endCall} aria-label="Hang Up">
      <CallEndIcon />
    </Fab>
  )
}

export default HangupButton;