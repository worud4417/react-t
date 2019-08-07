import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MyButton extends React.Component{
    static defaultProps ={
        size:20,
        style:{},
        iconName: '',
        text: '',
        onPress:()=>console.log("onPress")
    }
    render(){
        return(
            <TouchableOpacity style={[{margin:15,borderWidth:2,padding:10},this.props.style]} onPress={this.props.onPress}>
                <Ionicons style={{alignSelf:'center'}} name={this.props.iconName} size={this.props.size}></Ionicons>
                <Text style={{backgroundColor:'tomato',fontSize:this.props.size}}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}