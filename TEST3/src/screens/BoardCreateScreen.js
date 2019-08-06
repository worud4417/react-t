import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import BoardCreate from '../components/BoardCreate.js';

export default class BoardCreateScreen extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text>
                    글 작성
                </Text>
                <BoardCreate {...this.props}></BoardCreate>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        alignContent:'center',
        color:'blue',
    }
}
)