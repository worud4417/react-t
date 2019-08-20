import React,{Component} from 'react';
import {View,Text,Button,AsyncStorage} from 'react-native';

export default class LogoutButtonComponent extends Component{

    constructor(props){
        super(props)
    }

    _Logout = async()=>{
        try{
            await AsyncStorage.removeItem('Login')
        }
        catch(error){}
        this.props.Logout()
    }

    render(){
        return(
            <View>
                <Button onPress={this._Logout} title="Logout"></Button>
            </View>
        )
    }
}