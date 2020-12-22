import React,{ Component } from 'react';

// class RegularClass{}
// class ComponentClass extends Component{
//
// }
//
// const regularClassInstance = new RegularClass();
// const otherClass = new ComponentClass();
//
// console.log('regular',regularClassInstance);
// console.log('ComponentClass', otherClass);

class App extends Component{
    state = {displayBio:false};
    // constructor(){
    // // OBS: commented because it is better to use the initialisers
    //     super();
    //     this.state = {displayBio:false};
    //
    //     console.log("Componnt this",this);
    //
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    // readMore(){
    //     this.setState({ displayBio:true });
    //     console.log(this);
    // }
    //
    // showLess(){
    //     this.setState({displayBio:false});
    // }

    toggleDisplayBio = ()=> {
        this.setState({displayBio: !this.state.displayBio});
        // this.state.displayBio =!this.state.displayBio; // WRONG!!!!
        // OBS: no onclick, passar somente a referencia pra funcao. Nao invocar com parenteses
    }
    render(){

        return (
            <div>
                React App
            </div>
        );
    }
}

export default App;
