import React,{Component} from 'react';
import {View,Text,BackHandler} from 'react-native';

export default class LoginScreen extends Component{

    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.backHandler = BackHandler.addEventListener('hardwareBackPress',()=>this.backEvent)
    // }

    // componentWillUnmount(){
    //     this.backHandler.remove()
    // }

    // backEvent= ()=>{
    //     console.log("hello")
    //     this.props.navigation.popToTop()
    //     return true
    // }

    render(){
        return(
            <View>
                <Text>LoginScreen</Text>
            </View>
        )
    }
}