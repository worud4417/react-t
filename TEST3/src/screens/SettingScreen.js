import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class SettingScreen extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text style={styles.text1}>Setting을 위한 스크린</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        text1:{
            fontSize:40,
            color:'red',
        }
    }
)