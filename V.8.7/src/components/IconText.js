import React from 'react';
import {View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class IconText extends React.Component{

    static defaultProps = {
        iconName: '',
        text:"",
        size:20
    }

    render(){
        return(
            <View style={{flexDirection:'row', flex:1}}>
                <Ionicons style={{flex:1}} name={this.props.iconName} size={this.props.size}></Ionicons>
                <Text style={{flex:1}}>{this.props.text}</Text>
            </View>
        )
    }
}