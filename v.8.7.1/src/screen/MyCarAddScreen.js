import React,{Component} from "react";
import {View,Text,TextInput,StyleSheet,AsyncStorage,KeyboardAvoidingView} from 'react-native';

import MyButton from '../components/MyButton';

export default class MyCarAddScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            vin:"",
            manufacturer:"",
            model:"",
            year: "",
            image:""
        }
    }

    static navigationOptions =({navigation})=>{
        const params = navigation.state.params || {};
        return {
            title:'MyCar Add'
        };
    }

    submitButton = async()=>{
        if(this.state.vin==''|| this.state.image==""){
            return false
        }
        let myCar = await AsyncStorage.getItem('myCar');
        myCar = JSON.parse(myCar);
        const newCar = {
            vin:this.state.vin,
            manufacturer:this.state.manufacturer,
            model:this.state.model,
            year:this.state.year,
            image:this.state.image
        }
        const newCarList = myCar.concat(newCar);
        try{
            await AsyncStorage.setItem('myCar',JSON.stringify(newCarList));
        }
        catch{
            console.log("error")
        }
        return this.props.navigation.navigate("MyCarList")
    }

    render(){
        return(
            <KeyboardAvoidingView style={{justifyContent:'center',flex:1}} behavior="padding" enabled>
                <Text style={{fontSize:10,margin:20,alignSelf:"center"}}>등록하려는 차의 정보를 입력해주세요.</Text>
                <View style={{alignItems:"center"}}>
                    <TextInput style={styles.TextInput} placeholder=" 번호" onChangeText={(text)=>this.setState({vin:text})}></TextInput>
                    <TextInput style={styles.TextInput} placeholder=" 모델" onChangeText={(text)=>this.setState({model:text})}></TextInput>
                    <TextInput style={styles.TextInput} placeholder=" 연식" onChangeText={(text)=>this.setState({year:text})}></TextInput>
                    <TextInput style={styles.TextInput} placeholder=" 제조사" onChangeText={(text)=>this.setState({manufacturer:text})}></TextInput>
                    <TextInput style={styles.TextInput} placeholder=" 이미지" onChangeText={(text)=>this.setState({image:text})}></TextInput>

                    <MyButton iconName={'ios-add'} text={"차량등록"} size={15} onPress={this.submitButton.bind(this)}></MyButton>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles= StyleSheet.create(
    {
        TextInput:{
            borderWidth:1,
            marginBottom:5,
            width:"70%",
            fontSize:20
        }
    }
)