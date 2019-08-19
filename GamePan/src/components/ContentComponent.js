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
            <View style={styles.content}>
                <TouchableOpacity style={{flex:1}}>
                    <Text>{this.state.content.number}</Text>
                    <Image source={{uri:this.state.content.image}} style={{height:100,width:100}}></Image>
                    <Text>{this.state.content.name}</Text>
                    <Text>{this.state.content.content}</Text>
                    <Text>{this.state.content.populer}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        
    }
})