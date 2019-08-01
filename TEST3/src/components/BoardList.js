import React,{Component} from 'react';
import {
    BoardItem,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class BoardList extends Component{

    renderItem({item}){
        return(
           <TouchableOpacity style={{flex:1,width:"100%",flexDirection:'row',borderWidth:1}}
           onPress={()=>this.props.navigation.push('Detail',{item:item})}>
               <Text style={{fontSize:24,flex:2}}>{item.key}</Text>
               <Text style={{fontSize:24,flex:10}}>{item.title}</Text>
           </TouchableOpacity>
        )
    }

    render(){
        console.log(this.props.board)
        return(
            <View style={{flex:1,justifyContent:"center",alignContent:"center",width:'100%',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:"900",marginBottom:20,marginLeft:20}}>
                    게시물
                </Text>
                <FlatList data={this.props.board} renderItem={this.renderItem.bind(this)}></FlatList>
            </View>
        )
    }
} 