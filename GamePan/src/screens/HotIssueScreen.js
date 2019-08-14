import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class HotIssueScreen extends Component{

    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <TouchableOpacity>
                    <Image source={require('../../assets/menu.png')} style={styles.headerLeft}></Image>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity>
                     <Image source={require('../../assets/bell.png')} style={styles.headerRight}></Image>
                </TouchableOpacity>
            ),
            headerStyle:{
                backgroundColor:"red",
            },
            title:"GAMEPAN"
        }
    }

    render(){
        return(
            <View>
                <Text>HotIssueScreen</Text>
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