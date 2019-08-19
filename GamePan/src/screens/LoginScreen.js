import React,{Component} from 'react';
import {View,Text,StyleSheet,AsyncStorage,Button,TextInput,TouchableOpacity,Image,KeyboardAvoidingView} from 'react-native';

export default class LoginScreen extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id:"",
            password:""
        }
    }

    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                     <Image source={require('../../assets/back.png')} style={styles.headerLeft}></Image>
                </TouchableOpacity>
            ),
        }
    }

    _submit = async()=>{    
        let id = await AsyncStorage.getItem(this.state.id)
        console.log(id)
        if(id == null){
            alert("ID error!")
            return null
        }

        if(id == this.state.password){
            await AsyncStorage.setItem('User','true')
            this.props.navigation.pop()
        }
        else{
            alert("PASSWORD error!")
            return null
        }
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
    headerLeft:{
        width:20,
        height:20,
        marginLeft:15
    },
    text:{
        fontSize:30
    }
})
