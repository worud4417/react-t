import React,{Component} from 'react';
import {View,Text,StyleSheet,AsyncStorage,Button,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,BackHandler} from 'react-native';

export default class LoginComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id:"",
            password:""
        }
    }

    _submit = async()=>{    
//this will change to connect server------------------------------------------------------------------------------------------------------------------------------------------------
        let id = await AsyncStorage.getItem(this.state.id)
        if(id == null){
            alert("ID error!")
            return null
        }

        if(id == this.state.password){
            await AsyncStorage.multiSet([['name','문재인'],['photo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vfAcztlJffcn_QHnNxmdVM_4gND4kKlSRsWYibnm004AiNqw']])
            await AsyncStorage.setItem('Login','true')
            this.props.setLogin()
        }
        else{
            alert("PASSWORD error!")
            return null
        }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <Text style={styles.text}>LoginScreen</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=>this.setState({id:text})} value={this.state.id} placeholder=" id" maxLength={30}></TextInput>
                <TextInput style={styles.textInput} onChangeText={(text)=>this.setState({password:text})} value={this.state.password} placeholder=" password" maxLength={30}></TextInput>
                <Button onPress={this._submit.bind(this)} title="submit"></Button>
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'gray',
        margin:10
    },
    text:{
        fontSize:30
    }
})
