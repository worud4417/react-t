import React,{Component} from 'react';
import {View,Image,Text,StyleSheet,FlatList} from 'react-native';

import ContentComponent from '../components/ContentComponent';

export default class ContentListComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            content:this.props.content
        }
    }

    renderContentList({item,index,separators}){
        return(
            <ContentComponent content={item}></ContentComponent>
        )
    }

    render(){
        return(
            <View>
                <FlatList data={this.state.content} renderItem={this.renderContentList.bind(this)}
                keyExtractor={(item,index)=>(item.number+"")}
                ItemSeparatorComponent={({highlighted,leadingItem})=>{
                    return(
                        <View style={styles.itemSeparator}></View>
                    )
                }}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        itemSeparator:{
            height:1,
            width:"100%",
            backgroundColor:"gray"
        }
    }
)