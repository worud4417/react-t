import React,{Component} from 'react';
import {View, Text,FlatList,List} from 'react-native';

export default class FlatListBasic extends Component{
    render(){
        return(
            <View style={{flex:1,paddingTop:22}}>
                <FlatList 
                data={[
                    {key:'A',value:'!'},
                    {key:'B',value:'@'},
                    {key:'C',value:'#'},
                    {key:'D',value:'$'},
                    {key:'E',value:'%'},
                    {key:'F',value:'^'},
                    {key:'G',value:'&'},
                    {key:'H',value:'*'},
                    {key:'I',value:'('},
                    {key:'J',value:')'}
                ]}
                renderItem={
                    ({item})=>{
                        return(
                            <View>
                                <Text style={{padding:10,fontSize:18,height:44}}>
                                    {item.key}:{item.value}
                                </Text>
                            </View>
                        )
                    }
                }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})