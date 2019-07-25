import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText:true};

        setInterval(() => {
            this.setState({showText: !this.state.showText})
        },2000)
    }

    render(){
        let display = this.state.showText ? this.props.text : '';
        return <Text>{display}</Text>
    }
}