import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class ContentConponent extends Component{

    constructor(props){
        super(props)
        this.state={
            content:this.props.content
        }
    }

    render(){
        return(
            <View style={{marginBottom:5}}>
                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                    <Text>{this.state.content.number}</Text>
                    <Image source={{uri:this.state.content.image}} style={{height:100,width:100}}></Image>
                    <View style={styles.text}>
                        <Text style={styles.tag}>{this.state.content.name}</Text>
                        <Text style={styles.content}>{this.state.content.content}</Text>
                        <Text>{this.state.content.populer}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        marginLeft:10,
        flex:1
    },
    tag:{
        backgroundColor:'#3333',
        color:'blue',
        flex:1
    },
    content:{
        fontSize:20,
        flex:2
    }
})