import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CallIcon from '@material-ui/icons/Call'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static" style={{textAlign: 'center'}}>
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="Menu" component={Link} to="/">
          <CallIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          React Video Calls
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header
