import React,{Component} from 'react';
import {View,Text, Image} from 'react-native';

export default class Banana extends Component{
    render(){
        const pic = {
            uri:'https://newsimg.hankookilbo.com/2016/04/13/201604131460701467_1.jpg'
        }
        return(
            <View>
               {/* <Text>1</Text>
            </View> */}
            <Image source = {pic} style={{width:200,height:200}}>

            </Image>
            </View>
        )
    }
}