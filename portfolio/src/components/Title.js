import React, {Component} from 'react';

const TITLES = [
    'a software developer',
    'a music lover',
    'an enthusiastic learner'
];

class Title extends Component{
    state = {titleIndex:0, fadeIn:true};
    animateTitles = () =>{
        this.titleInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex +1)%TITLES.length;
            this.setState({titleIndex,fadeIn:true});
            this.timeout = setTimeout(()=>{
                this.setState({fadeIn:false})
            },2000);
        },4000);
    }
    componentDidMount(){
        this.timeout = setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000);
        this.animateTitles();
    }
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
    render(){
        const {fadeIn,titleIndex} = this.state;
        const title = TITLES[titleIndex];
        return(
            <p className={fadeIn?'title-fade-in':'title-fade-out'}>I am {title}</p>
        );
    }
}

export default Title;
