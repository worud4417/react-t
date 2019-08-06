import React,{Component} from 'react';
import {
    BoardItem,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class BoardList extends Component{

    constructor(props){
        super(props)
    }

    renderItem({item}){
        return(
            <View>
           <TouchableOpacity style={{flex:1,width:"100%",flexDirection:'row',borderWidth:1}}
           onPress={()=>this.props.navigation.push('Detail',{item:item})}>
               <Text style={{fontSize:24,flex:2}}>{item.key}</Text>
               <Text style={{fontSize:24,flex:10}}>{item.title}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.deleteFunc(item.key)}><Text>삭제</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.push('Modified',{item:item,editFunc:this.props.editFunc})}><Text>글 수정</Text></TouchableOpacity>
           </View>
        )
    }

    render(){
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