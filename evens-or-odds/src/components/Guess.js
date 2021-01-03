import React,{Component} from 'react';
import {connect} from 'react-redux'
import {GUESS} from '../actions/types';
import {setGuessOdd,setGuessEven} from '../actions/gameState';

class Guess extends Component {
    render(){
        return(
            <div>
                <h3> Will it be even or odd?</h3>
                <form>
                    <input id="button_odd" type="radio" name="currentGuess" value={GUESS.ODD}
                        checked={this.props.currentGuess === GUESS.ODD}
                        onChange={this.props.setGuessOdd}/>
                    <label htmlFor="button_odd"> Odd </label>
                    <input id="button_even" type="radio" name="currentGuess" value={GUESS.EVEN}
                        checked={this.props.currentGuess === GUESS.EVEN}
                        onChange={this.props.setGuessEven}/>
                    <label htmlFor="button_even"> Even </label>
                </form>
            </div>
        );
    }
}

export default connect(
    ({gameState:{currentGuess}})=>({currentGuess}),
    {setGuessOdd,setGuessEven}
)(Guess);
