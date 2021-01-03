import React from 'react';
import {connect} from 'react-redux'

const correctGuessesRecordKey = 'CORRECT_GUESES_RECORD';

const checkRecord = correctGuesses =>{
    const record = Number(localStorage.getItem(correctGuessesRecordKey));
    if (correctGuesses > record){
        localStorage.setItem(correctGuessesRecordKey,correctGuesses);
        return {record: correctGuesses,isNewRecord:true};
    }

    return {record,isNewRecord: false};
};

const GameState = ({remaining,correctGuesses}) =>{
    const recordObject = checkRecord(correctGuesses);

    const recordLabel = recordObject.isNewRecord ?  "New Record": "Record";
    return(
        <div>
            <h3> {recordLabel}: {recordObject.record}</h3>
            <p>{remaining} cards remaining </p>
            <p>{correctGuesses} correct guesses </p>
        </div>
    );
}

export default connect(
    ({deck: {remaining}, gameState :{correctGuesses}})=>({remaining,correctGuesses})
)(GameState)
