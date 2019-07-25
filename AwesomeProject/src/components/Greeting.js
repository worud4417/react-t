import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Greeting extends Component{
    render(){
        return(
            <View>
                <Text>Hello, {this.props.name}</Text>
                <Text>Heart of Gold</Text>
            </View>
        )
    }
}