import React,{ Component } from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'
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
                <img className="profile" src={profile} alt='profile'/>
                <h1>Hello!</h1>
                <p>My name is Eric. I am a sofware developer. </p>
                <p>Im always eager to learn new things! </p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p> I live in Sao Paulo</p>
                            <p> My favorite  language is Python, and I think I always have something to learn.</p>
                            <p>Besides coding, I also love music and Ice skating.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        );
    }
}

export default App;
