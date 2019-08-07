import React ,{Component}from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import MyButton from './MyButton';

export default class AuctionList extends Component{
    constructor(props){
        super(props)
    }

    static defaultProps = {
        auctionList : null
    }
    
    render(){
        if(this.props.auctionList){
            return(
                <View>
                </View>
            )
        }
        else{
            return(
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Text>진행 중인 경매가 없습니다.</Text>
                    <MyButton iconName="ios-car" text="경매 등록"></MyButton>
                </View>
            )
        }
    }
}