import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {startGame,cancelGame} from '../actions/settings'
import Instructions from './Instructions'
import {fetchNewDeck} from '../actions/deck';
import DrawCard from  './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component{
    state = {};
    startGame = () =>{
            this.props.startGame();
            this.props.fetchNewDeck();
    }
    render(){
        console.log(this);
        if (this.props.fetchStatus===false){
            return (
                <div>
                    <p>An error has occured </p>
                    <p>{this.props.message}</p>
                </div>
            );
        }

        return (
            <div>
                <h2>Evens or Odds</h2>
                {
                    (this.props.gameStarted)?(
                        <div>
                            <h3> Game is on!</h3>
                            <GameState/>
                            <br />
                            <Guess />
                            <br/>
                            <DrawCard/>
                            <hr />
                            <Card />
                            <hr />
                            <button onClick={this.props.cancelGame}> Cancel Game </button>
                        </div>
                    ):(
                        <div>
                            <h3> A new game awaits</h3>
                            <br/>
                            <button onClick={this.startGame}> Start Game </button>
                        </div>
                    )

                }
                <hr/>
                <Instructions />
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    // In the comment, there is the destruction syntax
    // for complex objects. Just for future references
    // const {
    //     settings : {gameStarted}
    //     deck: {fetchStatus,message}
    // } = state;
    return {
        gameStarted : state.settings.gameStarted,
        fetchStatus : state.deck.fetchStatus,
        message: state.deck.message
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        startGame : () => dispatch(startGame()),
        cancelGame : () => dispatch(cancelGame()),
        fetchNewDeck : () => dispatch(fetchNewDeck())
    };
};

const componentConnector  = connect(mapStateToProps,mapDispatchToProps)

export default componentConnector(App);
