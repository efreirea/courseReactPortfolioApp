import React from 'react';
import {connect} from 'react-redux';

const Card = ({card:{value,image,suit,code},cardFetchStatus}) =>{
// const Card = (props) =>{
    return(
        <div>
            <h3> {value} of {suit}</h3>
            {
                (cardFetchStatus)?(
                    <img src={image} alt={code} />
                ): null
            }
        </div>
    );
}

const mapStateToProps = (state)=>{
    const {card,cardFetchStatus} = state.deck
    return {
        card,cardFetchStatus
    };
}

export default connect(
    // (({deck:{card,cardFetchStatus}})=>{card,cardFetchStatus})
    mapStateToProps
)(Card);
