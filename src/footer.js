import React, { Component } from 'react';
import './App.css';

class Player extends Component {
  render() {
      var action = this.props.player.isPlaying ? 'Pause' : 'Play';
    return (
      <div>
          <footer>
              <div className="row">
              <button style={{marginLeft: "40%",width:"20%",backgroundColor:"orange"}} onClick={()=>this.props.callOnClick(this.props.value)}> { action}</button>
              </div>
          </footer>
       </div>
    );
  }
}

export default Player;
