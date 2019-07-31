import React ,{Component}from 'react';
import {StyleSheet,Text,View, TouchableOpacity} from 'react-native';

export default class base extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text1}>상세 스크린!</Text>
                <TouchableOpacity onPress={()=>this.props.goProps.navigation.push('Detail')}><Text style={styles.text2}>디테일의 디테일 가기</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.goProps.navigation.goBack()}><Text style={[styles.text2, {color:'gold'}]}>뒤로 가기</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.goProps.navigation.popToTop()}><Text style={[styles.text2,{color:'red'}]}>처음으로 가기</Text></TouchableOpacity>

                {/* <TouchableOpacity onPress={()=>this.props.goProps.navigation.navigate('Detail')}><Text style={styles.text2}>디테일의 디테일 가기</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.props.link1} props={this.props}><Text style={[styles.text2, {color:'gold'}]}>뒤로 가기</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.goProps.navigation.popToTop()}><Text style={[styles.text2,{color:'red'}]}>처음으로 가기</Text></TouchableOpacity> */}
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