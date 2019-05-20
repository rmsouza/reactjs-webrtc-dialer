import React from 'react'
import Fab from '@material-ui/core/Fab'
import VideocamIcon from '@material-ui/icons/Videocam'

function VideoOnButton (props) {
  return (
    <Fab onClick={props.videoOn} aria-label="Video on">
      <VideocamIcon />
    </Fab>
  )
}

export default VideoOnButton;