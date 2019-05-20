import React from 'react'
import Fab from '@material-ui/core/Fab'
import MicOffIcon from '@material-ui/icons/MicOff'

function MicOffButton (props) {
  return (
    <Fab onClick={props.micOff} aria-label="Mic Off">
      <MicOffIcon />
    </Fab>
  )
}

export default MicOffButton;