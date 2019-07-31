import React,{Component} from'react';
import {Text, View,SectionList,TouchableOpacity} from 'react-native';

export default class SectionListBasic extends Component{ 
    render(){
        return(
            <View>
                    <SectionList sections={[{title:'D',data:['Devin']},{title:"A",
                data:['Adam','Aven']}]} renderItem={({item})=><TouchableOpacity onPress={()=>{
                    alert(item);
                }}><Text>{item}</Text></TouchableOpacity>}
                renderSectionHeader={
                    ({section})=><Text>{section.title}</Text>
                }
                keyExtractor={(item,index)=>index}>
                    </SectionList>
            </View>
        )
    }
}