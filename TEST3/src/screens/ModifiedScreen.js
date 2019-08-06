import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import MyButton from '../components/MyButton';

export default class ModifiedScreen extends Component{

    constructor(props){
        super(props)
        const item = this.props.navigation.getParam('item')
        this.state={
            key:item.key,
            title:item.title,
            content:item.content
        }
    }

    submitEditBoard(){
        const editFunc = this.props.navigation.getParam('editFunc')
        const key = this.state.key
        const title = this.state.title
        const content = this.state.content
        editFunc(key,title,content)
        return this.props.navigation.navigate('Home')
    }


    render(){
        return(
            <View>
                <Text style={styles.T1}>글 수정</Text>
                <TextInput style={[styles.TI1,{height:30}]} value={this.state.title} onChangeText={(text)=>this.setState({title:text})} placeholder="제목"></TextInput>
                <TextInput style={styles.TI1} multiline={true} value={this.state.content} onChangeText={(text)=>this.setState({content:text})} placeholder="내용"></TextInput>
                <MyButton onPress={this.submitEditBoard.bind(this)} title="수정"></MyButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    T1:{
        fontSize:30,
        borderWidth : 1,
        borderStyle:'solid'
    },
    TI1:{
        borderWidth:1,
        margin:10,
        fontSize:20,
        height:400
    }
}
)