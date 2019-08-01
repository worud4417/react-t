import React,{Component} from 'react';
import {TouchableOpacity ,View,Text} from 'react-native';

export default class MyButton extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text style={{backgroundColor:"orange",color:"white",fontSize:20}}>글 쓰기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}