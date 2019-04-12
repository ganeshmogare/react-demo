import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './footer';
import PlayersList from './playersList';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
        this.hanldeCommonClick = this.hanldeCommonClick.bind(this);
        this.state={
            currentPlayer: 0,
            playList : [{
                "name": "player1",
                "isPlaying": false
            },
            {
                "name": "player2",
                "isPlaying": false
            }, {
                "name": "player3",
                "isPlaying": false
            },
            {
                "name": "player4",
                "isPlaying": false
            },
            {
                "name": "player5",
                "isPlaying": false
            },
            {
                "name": "player6",
                "isPlaying": false
            }]
        }
    }
    handleSelectPlayer(index){
        const playList = this.state.playList;
        playList[index].isPlaying = !playList[index].isPlaying;
this.setState({
    currentPlayer: index,
    playList
})
    }

    hanldeCommonClick(index){
        const playList = this.state.playList;
        playList[index].isPlaying = !playList[index].isPlaying;
this.setState({
    playList
})
    }
    
    render(){
        return(
            <div>
            <div className="container">
            <PlayersList playList={this.state.playList} currentPlayer ={this.state.currentPlayer} callOnClick ={this.handleSelectPlayer}/>
            </div>
            <Footer value={this.state.currentPlayer} player= {this.state.playList[this.state.currentPlayer]} callOnClick={this.hanldeCommonClick}/>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

