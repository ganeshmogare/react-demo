import React, { Component } from 'react';
import './App.css';

class Player extends React.Component {
  handleClick(){
    this.props.callOnClick(this.props.index);
  }  
  render() {
      var status = this.props.player.isPlaying ? 'Playing ' : 'Paused';
    return (
      <div onClick={ ()=>this.props.callOnClick(this.props.index)}>
       <div className="cardHeader">
          {this.props.player.name}
       </div>
       <div className="cardBody">
        { status}
       </div>
       </div>
    );
  }
}

export default Player;
