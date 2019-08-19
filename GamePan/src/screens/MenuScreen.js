import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,list} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import MenuListComponent from '../components/MenuListComponent';

let menuList =[
    {

    }
]

export default class MenuScreen extends Component{
    constructor(props){
        super(props)
    }

    static navigationOptions = ({navigation})=>{
        return{
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
                <NavigationEvents onWillBlur={payload=>this.props.navigation.pop()}></NavigationEvents>
                <MenuListComponent name='Game' content={[{name:'LOL'},{name:'BATTALGROUND'}]}></MenuListComponent>
                <MenuListComponent name='Coin' content={[{name:'BITCOIN'}]}></MenuListComponent>
                <MenuListComponent name='Etc' content={[{name:'FREE'}]}></MenuListComponent>
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