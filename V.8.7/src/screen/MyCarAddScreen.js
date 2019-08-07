import React,{Component} from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native';

export default class MyCarAddScreen extends React.Component{

    static navigationOptions =({navigation})=>{
        const params = navigation.state.params || {};
        return {
            title:'MyCar Add'
        };
    }

    render(){
        return(
            <View style={{justifyContent:'center',flex:1}}>
                <Text style={{fontSize:10,margin:20,alignSelf:"center"}}>등록하려는 차의 정보를 입력해주세요.</Text>
                <View style={{alignItems:"center"}}>
                    <TextInput style={styles.TextInput}></TextInput>
                    <TextInput style={styles.TextInput}></TextInput>
                    <TextInput style={styles.TextInput}></TextInput>
                    <TextInput style={styles.TextInput}></TextInput>
                    <TextInput style={styles.TextInput}></TextInput>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create(
    {
        TextInput:{
            borderWidth:1,
            marginBottom:5,
            width:"70%"
        }
    }
)