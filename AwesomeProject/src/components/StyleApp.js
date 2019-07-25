import React ,{Component}from"react";
import {Text,View,StyleSheet} from 'react-native';

export default class StyleApp extends Component{
    render(){
        return(
        <View>
            <Text style={{color:'red'}}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue : {
        color : 'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color :'red',
    },
});
