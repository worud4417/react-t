import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';

import BoxApp from '../components/BoxApp';

export default class BaseTextInput extends Component{
    constructor(props){
        super(props);
        this.state={text: ""};
    }

    render(){
        return(
            <View>
                <TextInput
                    style = {{height:40, width:'80%',borderColor:'gray',borderWidth:1,fontSize:40}}
                    onChangeText = {(text)=>this.setState({text})}
                    value={this.state.text} placeholder="Hello">
                </TextInput>
                <Text>{this.state.text}</Text>
                {/* <Text>{BoxApp.state.style}</Text> */}
            </View>
        )
    }
}