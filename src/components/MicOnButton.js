import React from 'react'
import Fab from '@material-ui/core/Fab'
import MicIcon from '@material-ui/icons/Mic'

function MicOnButton (props) {
  return (
    <Fab onClick={props.micOn} aria-label="Mic On">
      <MicIcon />
    </Fab>
  )
}

export default MicOnButton;