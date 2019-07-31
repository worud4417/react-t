import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DetailScreen from './src/screens/DetailScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import SettingScreen from './src/screens/SettingScreen.js';

const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
  },
  Detail:{
    screen:DetailScreen,
  }
});

const TabNavigator = createBottomTabNavigator({
  Home:{
    screen:AppNavigator,
    navigationOptions:{
      title:"home"
    }
  },
  Setting:{
    screen:SettingScreen
  }
},
{
  defaultNavigationOptions
})



const AppContainer = createAppContainer(TabNavigator);
const AppContainer1 = createAppContainer(AppNavigator);

export default function App() {
  return (
      <AppContainer></AppContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const defaultNavigationOptions={
  headerTintColor:"white",
  tabBarOptions:{
    activeTintColor:'tomato',
    inactiveTintColor:'gray',

    labelStyle:{
      fontSize:16,
    },
  },
};