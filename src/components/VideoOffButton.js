import React from 'react'
import Fab from '@material-ui/core/Fab'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'

function VideoOffButton (props) {
  return (
    <Fab onClick={props.videoOff} aria-label="Video off">
      <VideocamOffIcon />
    </Fab>
  )
}

export default VideoOffButton;