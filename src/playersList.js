import React, { Component } from 'react';
import './App.css';
import Player from './player.js'

class PlayerList extends React.Component {

myuProps = {
    sai: 4,
    ganesh: 5
}

mufnc () {

}

    render() {
       
        const cards = this.props.playList.map( (player, index) => {
            let thisClass = this.props.currentPlayer === index ? 'card-sel'  : 'card';
            return <div key={index} className={thisClass}>
                <Player player={player} currentPlayer ={this.props.currentPlayer} index={index} callOnClick={this.props.callOnClick} />
            </div>;
        });
        return (

            <div>
                {cards}
            </div>
        );
    }
}

export default PlayerList;
