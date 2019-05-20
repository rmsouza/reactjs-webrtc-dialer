import React, { Component } from 'react'
import Peer from 'peerjs'
import HangupButton from './HangupButton'
import MicOffButton from './MicOffButton'
import MicOnButton from './MicOnButton'
import VideoOffButton from './VideoOffButton'
import VideoOnButton from './VideoOnButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import avatarWoman from '../avatar-woman.png'

let peer = null
let conn = null
let localMediaStream = null
let myVideo = null
let otherVideo = null

class Call extends Component {
  state = {
    peerId: '',
    receiverId: ''
  }

  setPeerId = (id) => {
    this.setState({peerId: id})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  endCall = () => {
    console.log('ending call')
  }

  micOffCall = () => {
    console.log('mic off')
  }

  makeCall = () => {
    if (this.state.receiverId) {
      const call = peer.call(this.state.receiverId, localMediaStream);
      call.on('stream', (stream) => {
        if (otherVideo.mozSrcObject !== undefined) {
          otherVideo.mozSrcObject = stream;
        } else if (otherVideo.srcObject !== undefined) {
          otherVideo.srcObject = stream;
        } else {
          otherVideo.src = stream;
        }

        otherVideo.play();
      });
    }
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

    myVideo = document.getElementById('my-video');
    otherVideo = document.getElementById('other-video');

    // Show my video
    // navigator.getUserMedia({video: true, audio: true}, function(stream) {
    //   myVideo.srcObject = stream;
    //   myVideo.play();
    //   localMediaStream = stream;
    // }, (err) => {
    //   console.error('Failed to get local stream', err);
    // });

    peer = new Peer();
  
    peer.on('open', this.setPeerId);

    peer.on('error', function(error) {
      console.log(error);
    });

    peer.on('connection', function (connection) {
      conn = connection;
      console.log('connection received');

      conn.on('data', function(data) {
        console.log('Received', data);
      });
    });

    // Receiving call
    peer.on('call', (call) => {
      call.answer(localMediaStream);

      call.on('stream', (stream) => {
        if (otherVideo.mozSrcObject !== undefined) {
          otherVideo.mozSrcObject = stream;
        } else if (otherVideo.srcObject !== undefined) {
          otherVideo.srcObject = stream;
        } else {
          otherVideo.src = stream;
        }

        otherVideo.play();
      });
    });
  }

  render() {
    return (
      <div className="call-page">
        <div className="big-avatar-container">
          <Avatar alt="Who is calling" src={avatarWoman} className="big-avatar" />
        </div>

        <div className="title">
          <Typography style={{color: '#ffffff'}} component="p">
            Incoming video call
          </Typography>
          <Typography style={{color: '#ffffff'}} variant="h3" component="h1">
            Lady Day
          </Typography>
        </div>

        <div className="videos">
          <video id="other-video" className="other-video"></video>
          <video id='my-video' className="my-video"></video>
        </div>

        <div className="bottom-menu">
          <MicOffButton micOff={this.micOff} />
          {/* <MicOnButton micOn={this.micOn} /> */}
          <VideoOffButton videoOff={this.videoOff} />
          {/* <VideoOnButton videoOn={this.videoOn} /> */}
          <HangupButton endCall={this.endCall} />
        </div>
      </div>
    )
  }
}

export default Call