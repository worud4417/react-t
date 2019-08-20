import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';

import LoginComponent from '../components/LoginComponent';

export default class MessageScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            login:false
        }
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

    _setLogin(){
        this.setState({login:true})
    }

    componentWillMount(){
        this._checkLogin()
    }

    _checkLogin = async()=>{
        try{
            let login = await AsyncStorage.getItem("Login")
            if(login != null){
                this.setState({login:true})
            }
        }
        catch(error){}
    }

    render(){
        if(!this.state.login){
            return(
                <LoginComponent setLogin={this._setLogin.bind(this)}></LoginComponent>
            )
        }
        else{
            return(
                <View>
                    <Text>MessageScreen</Text>
                </View>
            )
        }
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