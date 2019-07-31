import React ,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class MainText extends Component{
    render(){
        return(
            <View>
                <Text style={styles.car}>CAR AUCTION</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    car:{
        color : 'red',
        fontSize:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});