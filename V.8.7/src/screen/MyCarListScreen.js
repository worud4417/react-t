import React from 'react';
import {View,Text,FlatList, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import CarList from '../components/CarList'

const mockData=[
    {
        vin:'abc',
        maunfacture:'Tesla',
        model:'M3',
        year: 2011,
        image: 'https://static.carsdn.co/cldstatic/wp-content/uploads/HP2019AudiA7.jpg'
    },
    {
        vin:'abcd',
        maunfacture:'kia',
        model:'K7',
        year: 2015,
        image: 'https://image.cnbcfm.com/api/v1/image/105427259-1535730447635gettyimages-810877128.jpeg?v=1535730503&w=720&h=405'
    }
];

export default class MyCarListScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            MyCarList:mockData
        };
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            headerRight:(
                <TouchableOpacity style={{padding :5, paddingRight:15}} onPress={()=>{navigation.push("MyCarAdd")}}>
                    <Ionicons name={"ios-add"} size={35} color={'white'}></Ionicons>
                </TouchableOpacity>
            ),
            title:'My Cars',
        };
    };
    
    render(){
        return(
            <View>
                <Text>MyCarList</Text>
                <CarList carList={this.state.MyCarList} {...this.props}></CarList>
            </View>
        )
    }
}