import React , {Component} from 'react';
import {Text,View} from 'react-native';

import Blink from './Blink';

export default class BlinkApp extends Component{
    render(){
        return(
            <View>
                <Blink text="Hello!"></Blink>
                <Blink text="this app change state at 2c"></Blink>
            </View>
        )
    }
}