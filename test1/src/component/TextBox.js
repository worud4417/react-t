import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {KeyboardAvoidingView} from 'react-native';

export default class TextBox extends Component{
    constructor(props){
        super(props);
        this.state = {name :"", password : ""};
    }

    submitButton(){
        alert(this.state.name+" "+this.state.password)
    }

    render(){
        return(
            <View>
                <View style = {styles.viewStyle}>
                    <Ionicons name = 'ios-person' size ={30} color ='gray'/>
                    <TextInput style={styles.textInput} onChangeText={(name)=>this.setState({name})} 
                    value={this.state.name} placeholder=" name">
                    </TextInput>
                </View>
                <View style = {styles.viewStyle}>
                    <Ionicons name = 'ios-person' size ={30} color ='gray'/>
                    <TextInput style={styles.textInput} onChangeText={(password)=>this.setState({password})} 
                    value={this.state.password} placeholder=" password">
                    </TextInput>
                </View>
                <View style = {styles.ButtonStyle}>
                    <Button onPress={this.submitButton.bind(this)} title="회원가입/로그인"></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        height: 40,
        width:250 ,
    },

    viewStyle:{
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : 'gray',
        margin : 5,
    },

    ButtonStyle:{
        backgroundColor: "#ffffff",
        margin : 5,
    }
});