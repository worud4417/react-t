import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation'

export default class MenuSectionListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            content:this.props.content
        }
    }

    renderContentList({item,index,separators}){
        return(
            <View style={styles.view}>
                <TouchableOpacity>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        if(this.props.hide == true){
            return(
               null
            )
        }
        else{
            return(
                <View>
                    <FlatList data={this.state.content} renderItem={this.renderContentList.bind(this)}
                    keyExtractor={(item,index)=>(item.name+"")} 
                    ></FlatList>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    text:{
        marginLeft:10,
        fontSize:20,
    },
    view:{
        borderWidth:2,
        borderColor:'gray'
    }
}
)