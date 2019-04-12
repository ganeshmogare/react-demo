import React, { Component } from 'react';
import './App.css';

class Player extends React.Component {

handleClickChild(isPlaying) {
    if(isPlaying){
        this.handleStopClicked();
    }else{
        this.handlePlyaClick();
    }
}

    handleClick() {
        
        this.props.callOnClick(this.props.index);
    }
    handlePlyaClick() {
        console.log("HandlePlayCkick::" + (2 + 3));
    }

    handleStopClicked() {
        console.log("handleStopClicked::" + (10 + 1));
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        if(this.props.currentPlayer === this.props.index){
        this.handleClickChild(this.props.isPlaying);
        }
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }

    render() {
        var status = this.props.player.isPlaying ? 'Playing ' : 'Paused';
        return (
            <div onClick={()=>this.handleClick()}>
                <div className="cardHeader">
                    {this.props.player.name}
                </div>
                <div className="cardBody">
                    {status}
                </div>
            </div>
        );
    }
}

export default Player;
