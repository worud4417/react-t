import React ,{Component}from"react";
import {Text,View,StyleSheet} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View>
                <Text style={[{fontSize : 40, fontWeight:'bold'},this.style.props]}>
                {this.props.children}
                </Text>
            </View>
        )
    }
}