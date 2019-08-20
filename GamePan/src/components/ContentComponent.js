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
            <View>
                <TouchableOpacity style={{flex:1,flexDirection:'row',marginBottom:5}} onPress={()=>this.props.navigation.push('DetailContent')}>
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
        margin:5,
        flex:1
    },
    tag:{
        color:'blue',
        backgroundColor:"#5553",
    },
    content:{
        fontSize:20
    }
})