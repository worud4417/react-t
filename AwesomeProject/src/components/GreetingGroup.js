import React,{Component} from 'react';
import {View,Text} from 'react-native';

import Greeting from './Greeting';

export default class GreetingGroup extends Component{
    render(){
        return(
            <View>
                <Greeting name="pizza"/>
                <Greeting name="chinken"/>
            </View>
        )
    }
}