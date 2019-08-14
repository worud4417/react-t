import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default class GameChannelScreen extends Component{

    static navigationOptions = ({navigation})=>{
        console.log("App")
        return{
          title:"App.js"
        }
      }

    render(){
        return(
            <View>
                <Text>GameChannelScreen</Text>
            </View>
        )
    }
}