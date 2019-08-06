import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DetailScreen from './src/screens/DetailScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import SettingScreen from './src/screens/SettingScreen.js';
import BoardCreateScreen from './src/screens/BoardCreateScreen.js';
import ModifiedScreen from './src/screens/ModifiedScreen.js';

const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
  },
  Detail:{
    screen:DetailScreen,
  },
  Create:{
    screen:BoardCreateScreen,
  },
  Modified:{
    screen:ModifiedScreen,
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

export default function App() {
  return (
      <AppContainer></AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
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

//https://drive.google.com/drive/folders/1l0jzgFwZoUx4nT78JI8vZlxa8WZ25wom