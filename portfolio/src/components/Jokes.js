import React, {Component} from 'react';

const Joke = ({joke : {setup,punchline}})=>{
    return(
        <p style={{margin:20}}>{setup}<em>{punchline}</em></p>
    );
};

class Jokes extends Component{
    state={ joke:{}, moreJokes: [] };

    getTenJokes = ()=>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then((response) => response.json())
        .then((json)=>{
            this.setState({moreJokes:json});
        }).catch(error => alert(error.message));
    }
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response)=>{
            return response.json();
        }).then((json)=>{
            this.setState({joke:json});
        }).catch(error => alert(error.message));
    }
    render(){
        return(
            <div>
                <h2>Highlighed Joke</h2>
                <Joke joke={this.state.joke} />
                <div>
                    <button onClick={this.getTenJokes}> More Jokes !</button>
                    {
                        (this.state.moreJokes.length > 0)?(
                            <div>
                                {
                                    this.state.moreJokes.map((joke)=>{
                                        return(<Joke key = {joke.id} joke={joke}/>)
                                    })
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}
export default Jokes;
