import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';

import LoginScreen from './LoginScreen';

export default class MyScreen extends Component{

    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <TouchableOpacity onP ress={()=>{navigation.navigate('Menu')}}>
                    <Image source={require('../../assets/menu.png')} style={styles.headerLeft}></Image>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity>
                     <Image source={require('../../assets/bell.png')} style={styles.headerRight}></Image>
                </TouchableOpacity>
            ),
        }
    }

    render(){
        return(
            <View>
                <LoginScreen></LoginScreen>
                <Text>LoginSuccess</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    headerLeft:{
        width:20,
        height:20,
        marginLeft:15
    },
    headerRight:{
        width:20,
        height:20,
        marginRight:15
    }
})