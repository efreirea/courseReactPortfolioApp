import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {expandInstructions,hideInstructions} from '../actions/settings'

class Instructions extends Component{
    render(){
        return (
            <div>
                <h3>Instructions</h3>
                {
                    (this.props.instructionsExpanded)?(
                        <div>
                            <button onClick={this.props.hideInstructions}>Hide Instructions</button>
                            <p>THESE ARE THE INSTRUCTIONS!!!!</p>
                        </div>
                    ):(
                        <div>
                            <button onClick={this.props.expandInstructions}>Show Instructions</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {instructionsExpanded : state.settings.instructionsExpanded};
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         expandInstructions: () => dispatch(expandInstructions()),
//         hideInstructions: () => dispatch(hideInstructions())
//     };
// }

const componentConnector = connect(mapStateToProps,{expandInstructions,hideInstructions});

export default componentConnector(Instructions);
