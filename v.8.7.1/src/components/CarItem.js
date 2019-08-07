import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

export default class CarItem extends Component{
    static defaultProps ={
        item:{
            vin:'',
            maunfacture:'',
            model:'',
            year: 0,
            image:''
        },
        style:{},
        onPress:()=>(console.log('onPress'))
    }

    render(){
        return(
            <View>
                <TouchableOpacity style={[styles.container,this.props.style]} onPress={this.props.onPress}>
                    <View style={styles.V1}>
                        <Image style={{height:"100%",width:"100%"}} source={{uri:this.props.item.image}}></Image>
                    </View>
                    <View style={styles.V2}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginRight:10}}>{this.props.item.vin}</Text>
                            <Text>{this.props.item.year}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:30, marginRight:10}}>{this.props.item.model}</Text>
                            <Text>{this.props.item.maunfacture}</Text>
                        </View>
                    </View>
                    <View style={styles.V3}>
                        <Text>0</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        borderWidth:1
    },
    V1:{
        flex:1,
    },
    V2:{
        flex:1,
        marginLeft:10
    },
    V3:{
        flex:1
    }
})