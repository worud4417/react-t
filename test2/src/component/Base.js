import React, {Component} from 'react';
import {Text, View,StyleSheet, Image,Button} from 'react-native';

export default class Base extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:"orange",alignItems:'center',justifyContent:'flex-end'}}>
                    <Text style={{fontSize : 30, color:'white'}}>My Cars</Text>
                    <Button></Button>
                </View>
                <View style={{flex:4, backgroundColor:"white"}}>
                    <View>
                        <Image style={{width:100,height:100}} source={require('../../assets/pride.jpg')}></Image>
                    </View>
                    <View>
                        <Image style={{width:100,height:100}} source={require('../../assets/tico.jpg')}></Image>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:"white", borderColor:"gray", borderWidth:2}}></View>
            </View>
        )
    }
}