import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class ButtonGroup extends Component{
    constructor(props){
        super(props);
        this.state ={
           'name':'jack',
        }
    }

    onPresButton1(){
        alert("button click 2");
    }

    alertStateName(){
        alert(this.state.name);
    }

    render(){
        return(
            <View>
                <Button onPress={()=>alert('button click1')} title='click!'></Button>
                <Button onPress={this.onPresButton1} title='click2!' color="#444444"></Button>
                <Button onPress={this.alertStateName.bind(this)} title='view name'></Button>
            </View>
        )
    }
}