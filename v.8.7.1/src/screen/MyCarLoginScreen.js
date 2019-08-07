import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';
import MyButton from '../components/MyButton';
import {AsyncStorage} from 'react-native';

export default class MyCarLoginScreen extends Component{
    constructor(props){
        super(props)
        const loginId = this.props.navigation.getParam('loginId');
        console.log(loginId)
        this.state={
            userid:'',
            pwd:'',
            loginId:loginId
        }

        if(loginId !=undefined){
            return this.props.navigation.navigate("MyCarList",{
                loginId:loginId
            })
        }
    }

    submitSignup= async()=>{
        const userid = this.state.userid;
        const pwd = this.state.pwd;

        let user = await AsyncStorage.getItem(`user:${userid}`);
        if(user !== null){
            alert('이미 가입된 아이디입니다.')
            return false
        }
        AsyncStorage.setItem(`user:${userid}`,pwd);

        return this.props.navigation.navigate("MyCarList",{
            loginId:userid
        })
    }

    render(){
        return(
            <View>
                <Text>LOGIN</Text>
                <TextInput placeholder="ID" onChangeText={(text)=>this.setState({userid:text})}></TextInput>
                <TextInput placeholder="PASSWORD" onChangeText={(text)=>this.setState({pwd:text})}></TextInput>
                <MyButton text="로그인" iconName="ios-archive" onPress={this.submitSignup}></MyButton>
                <MyButton text="회원가입" iconName="ios-archive"></MyButton>
            </View>
        )
    }
}