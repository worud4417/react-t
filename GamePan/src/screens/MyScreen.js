import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';

import LoginScreen from './LoginScreen';
import { NavigationEvents } from 'react-navigation';

export default class MyScreen extends Component{

    constructor(props){
        super(props)
    }

    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}}>
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

    _getUser= async ()=> {
        try{
            await AsyncStorage.getItem('User').then((token)=>{
                if(token == 'false'|| token == null){
                    this.props.navigation.navigate("Login")
                }
            });
        }
        catch{
            await AsyncStorage.setItem('error','true')
        }
    }

    render(){
        return(
            <View>
                <NavigationEvents onWillFocus={payload => this._getUser()}></NavigationEvents>
                <Text>Loginsuccess</Text>
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