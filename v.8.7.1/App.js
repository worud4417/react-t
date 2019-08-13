import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import{
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import MyCarListScreen from './src/screen/MyCarListScreen';
import MyCarDetailScreen from './src/screen/MyCarDetailScreen';
import MyCarAddScreen from './src/screen/MyCarAddScreen';
import MyCarLoginScreen from './src/screen/MyCarLoginScreen';

const auction = function tempAuction(){
  return(
    <View></View>
  )
}

const settings =function tempSetting(){
  return(
    <View></View>
  )
}

const defaultNavigationOptions={
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:'tomato',
  },
};

const MyCarStack = createStackNavigator({
  'MyCarLogin':{
    screen:MyCarLoginScreen
  },
  'MyCarList':{
    screen:MyCarListScreen
  },
  'MyCarDetail':{
    screen:MyCarDetailScreen
  },
  "MyCarAdd":{
    screen:MyCarAddScreen
  },
},
{
  defaultNavigationOptions
})

const tabNavigator = createBottomTabNavigator({
  'MyCars':{
    screen:MyCarStack
  },
  'Auction':{
    screen:auction
  },
  'Settings':{
    screen:settings
  }
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,horizontal,tintColor})=>{
      const {routeName} = navigation.state;
      let iconName;
      if(routeName === 'MyCars'){
        iconName = 'ios-car';
      }
      else if(routeName === 'Auction'){
        iconName = 'ios-trending-up';
      }
      else if(routeName === 'Settings'){
        iconName = 'ios-settings';
      }
      return (
      <Ionicons name={iconName} size={horizontal ? 20:25} color={tintColor} />
      );
    }
  })
})

const AppContainer = createAppContainer(tabNavigator)

export default function App() {
  return ( 
    <AppContainer></AppContainer>
  );
}