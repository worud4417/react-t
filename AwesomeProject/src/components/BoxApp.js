import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class BoxApp extends Component{
    constructor(props){
        super(props);
        this.state = {style: styles.s1};

        setInterval(()=>{
            if(this.state.style == styles.s1){
                this.setState({style:styles.s2});
            }
            else if(this.state.style == styles.s2){
                this.setState({style:styles.s3});
            }
            else if(this.state.style == styles.s3){
                this.setState({style:styles.s1});
            }
        },1000)
    }

    render(){
        let style1 = this.state.style;

        return(
            <View>
                <Text style={style1}></Text>
                <View style={{width:30, height:30, backgroundColor:"yellow"}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    s1 : {
        width : 50,
        height : 50,
        backgroundColor : "blue",
    },

    s2:{
        width : 100,
        height : 100,
        backgroundColor :'red',
    },

    s3:{
        width : 150,
        height: 150,
        backgroundColor : 'black',
    },
});