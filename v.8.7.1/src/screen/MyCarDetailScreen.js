import React from 'react';
import {Text,View,Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import IconText from '../components/IconText';
import AuctionList from '../components/AuctionList';

export default class MyCarDetailScreen extends React.Component{
    constructor(props){
        super(props);
        const myCar = props.navigation.getParam('item')
        this.state={
            myCar:myCar
        }
    }

    static navigationOptions =({navigation})=>{
        const item = navigation.getParam('item')
        return {
            title:item.model,
        };
    };

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Image style={{height:"100%",width:"100%",flex:4,borderColor:'gray',borderWidth:10}} source={{uri:this.props.navigation.getParam("item").image}}></Image>
                    <View style={{flexDirection:'row',flex:1}}>
                        <View style={{flex:1}}>
                            <IconText iconName={'ios-list'} text={this.props.navigation.getParam('item').vin}></IconText>
                            <IconText iconName={'ios-car'} text={this.props.navigation.getParam('item').model}></IconText>
                        </View>
                        <View style={{flex:1}}>
                            <IconText iconName={'ios-today'} text={this.props.navigation.getParam('item').year}></IconText>
                            <IconText iconName={'ios-business'} text={this.props.navigation.getParam('item').maunfacture}></IconText>
                        </View>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <AuctionList></AuctionList>
                </View>
            </View>
        )
    }
}