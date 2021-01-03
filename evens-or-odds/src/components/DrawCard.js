import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchCard} from '../actions/deck';



class DrawCard extends Component{

    fetchCard = () =>{
        // TODO: verificar pq isso funcionou
        this.props.fetchCard(this.props.deck_id);
    }
    render(){
        console.log('DrawCard props',this.props)
        return(
            <div>
                <button onClick={this.fetchCard}>Draw the next card!</button>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchCard :  (deck_id) => dispatch(fetchCard(deck_id))
    }
}

export default connect(
    ({deck: {deck_id}}) =>({deck_id,}),
    // {fetchCard} // TODO: verificar pq isso funcionou em conjunto com a linha 11
    mapDispatchToProps
)(DrawCard);
