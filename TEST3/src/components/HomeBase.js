import React ,{Component}from 'react';
import {StyleSheet,Text,View, TouchableOpacity} from 'react-native';

export default class base extends Component{
    render(){
        console.log(this.props.props)
        return(
            <View>
                <Text style={styles.text1}>홈 스크린!</Text>
                <TouchableOpacity onPress={this.props.link}>
                    <Text style={styles.text2}>디테일 가기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text1:{
        fontSize:30,
    },

    text2:{
        fontSize:20,
        color:'blue',
    },
})