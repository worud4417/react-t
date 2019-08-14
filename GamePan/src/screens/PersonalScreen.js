import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default class PersonalScreen extends Component{

    static navigationOptions = ({navigation})=>{
        console.log("App")
        return{
          title:"App.js"
        }
      }
      
    render(){
        return(
            <View>
                <Text>PersonalScreen</Text>
            </View>
        )
    }
}