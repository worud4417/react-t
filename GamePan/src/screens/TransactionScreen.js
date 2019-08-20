import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class TransactionScreen extends Component{

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
      
    render(){
        return(
            <View>
                <Text>TransactionScreen</Text>
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