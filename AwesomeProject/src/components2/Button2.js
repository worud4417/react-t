import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Image,TouchableOpacity} from 'react-native';

export default class Button2 extends Component{

    _onPressButton(){
        alert('click!');
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                        style={{height:100,width:100}}
                        source={require('../../assets/button.jpg')}></Image>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                <Image
                       style={{height:100,width:100}}
                        source={require('../../assets/button.jpg')}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}