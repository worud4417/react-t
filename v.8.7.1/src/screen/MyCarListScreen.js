import React from 'react';
import {View,Text,FlatList, TouchableOpacity,AsyncStorage} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';

import CarList from '../components/CarList'

const mockData=[
    {
        vin:'abc',
        maunfacture:'Tesla',
        model:'M3',
        year: 2011,
        image: 'h/wp-content/uploads/HP2019AudiA7.jpg'
    },
    {
        vin:'abcd',
        maunfacture:'kia',
        model:'K7',
        year: 2015,
        image: 'https://image.cnbcfm.com/api/v1/image/105427259-1535730447635gettyimages-810877128.jpeg?v=1535730503&w=720&h=405'
    },
    {
        vin:'akhg',
        maunfacture:'Toyota',
        model:'lexus',
        year: 2012,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjn5fRPpPCA6IwrthwbE15swN42loYKvBoPIYUthRmnDo5gzm'
    }
];

export default class MyCarListScreen extends React.Component{
    constructor(props){
        super(props)

        this.state={
            MyCarList:mockData
        }
        this.initMyCar()
    }

    initMyCar = async ()=>{
        AsyncStorage.removeItem('myCar');
        let carList = await AsyncStorage.getItem("myCar");
        if(carList === null){
            await AsyncStorage.setItem("myCar",JSON.stringify(mockData))
            carList = mockData;
        }
        else{
            carList = JSON.parse(carList);
        }
        this.setState({MyCarList:carList})
    }

    // addMyCar(vin,maunfacture,model,year,image){
    //     const car = {
    //         vin:vin,
    //         maunfacture : maunfacture,
    //         model : model,
    //         year : year,
    //         image : image
    //     }

    //     const newMyCarList = this.state.MyCarList.concat(car);
    //     this.setState({carList : newMyCarList});
    // }

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
                <NavigationEvents onWillFocus={payload=>this.initMyCar()}></NavigationEvents>
                <Text>MyCarList</Text>
                <CarList carList={this.state.MyCarList} {...this.props}></CarList>
            </View>
        )
    }
}