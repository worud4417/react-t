import React,{Component} from 'react';
import {KeyboardAvoidingView,TextInput,TouchableOpacity,StyleSheet,View,Text} from 'react-native';

export default class BoardCreate extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            content:''
        }
    }

    titleChanged(title){
        this.setState({title})
        console.log(this.state.title)
    }

    textChange(text){
        this.setState({content:text})
        console.log(this.state.context)
    }

    submitBoard(){
        const createFunc = this.props.navigation.getParam('createFunc')
        const boardItem = {
            title: this.state.title,
            content: this.state.content
        }
        createFunc(boardItem)
        return this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.KAV}>
                <TextInput style={styles.TI} placeholder="제목" onChangeText={this.titleChanged.bind(this)}></TextInput>
                <View style={styles.V1}>
                    <TextInput style={styles.TI2} multiline={true} placeholder="내용" onChangeText={this.textChange.bind(this)}>
                    </TextInput>
                </View>
                <View style={styles.V2}>
                    <TouchableOpacity onPress={this.submitBoard.bind(this)} style={styles.TO}>
                        <Text style={styles.T}>
                            제출하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    KAV:{
        alignContent:'center',
    },
    TI:{

    },
    TI2:{
        width:'90%',
        height:50,
        borderWidth:1,
    },
    V1:{
        width:'90%',
        minHeight:200,
        flexDirection:'row',
        position : 'relative',
    },
    V2:{
        height:50,
        marginTop:20,
        position:'relative',
        flexDirection:'row'
    },
    T:{
        fontSize:20
    },
    TO:{
        height:50,
    }
})