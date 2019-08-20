import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';

import { NavigationEvents } from 'react-navigation';

export default class MyScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            photo:"x",
            login:false
        }
    }

    static navigationOptions = ({navigation})=>{
        return{
            headerLeft:(
                <TouchableOpacity onPress={()=>{navigation.push('Menu')}}>
                    <Image source={require('../../assets/menu.png')} style={styles.headerLeft}></Image>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity>
                     <Image source={require('../../assets/bell.png')} style={styles.headerRight}></Image>
                </TouchableOpacity>
            ),
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                 <View style={{flex:1,flexDirection:'row', borderBottomWidth:2}}>
                    <View style={{flex:1}}>
                        <Image source={{uri:this.state.photo}} style={styles.photo}></Image>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:30,margin:10,fontWeight:'bold'}}>{this.state.name}</Text>
                        <Text>직업 : 조선민주주의인민공화국 수석 대변인</Text>
                        <Text>특기 : 합법적 트롤</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <Text>거래내역</Text>
                    <Text>내가 쓴글</Text>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    headerLeft:{
        width:20,
        height:20,
        marginLeft:15
    },
    headerRight:{
        width:20,
        height:20,
        marginRight:15
    },
    photo:{
        flex:1,
        width:100,
        height:100,
        borderWidth:5,
        borderColor:"#000"
    },
    list:{
        flex:1,
        fontSize:20,
        alignItems:'center'
    }
})