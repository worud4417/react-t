import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation'

import FirstScreen from './src/screens/FirstScreen';
import GameChannelScreen from './src/screens/GameChannelScreen';
import HotIssueScreen from './src/screens/HotIssueScreen';
import PersonalScreen from './src/screens/PersonalScreen';
import TransactionScreen from './src/screens/TransactionScreen';

const defaultNavigationOptions={
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:'tomato',
  },
};

const HomeStack = createStackNavigator({
  'First':{
    screen:FirstScreen
  },
},{
  defaultNavigationOptions
})

const GameChannelStack = createStackNavigator({
  'GameChannel':{
    screen:GameChannelScreen
  },
},{
  defaultNavigationOptions
})

const HotIssueStack = createStackNavigator({
  'HotIssue':{
    screen:HotIssueScreen
  },
},{
  defaultNavigationOptions
})

const PersonalStack = createStackNavigator({
  'Personal':{
    screen:PersonalScreen
  },
},{
  defaultNavigationOptions
})

const TransactionStack = createStackNavigator({
  'Transaction':{
    screen:TransactionScreen
  },
},{
  defaultNavigationOptions
})

const tabNavigator = createBottomTabNavigator({
  'Home':{
    screen:HomeStack
  },
  'GameChannel':{
    screen:GameChannelStack
  },
  'HotIssue':{
    screen:HotIssueStack
  },
  'Personal':{
    screen:PersonalStack
  },
  'Transaction':{
    screen:TransactionStack
  }
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,horizontal,tintColor})=>{
      const {routeName} = navigation.state;
      let iconName;
      if(routeName === 'Home'){
        iconName = './assets/home.png';
        return (
          <Image source={require('./assets/home.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'GameChannel'){
        return (
          <Image source={require('./assets/channel.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'HotIssue'){
        return (
          <Image source={require('./assets/sun.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'Personal'){
        return (
          <Image source={require('./assets/settings.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'Transaction'){
        return (
          <Image source={require('./assets/transaction.png')} style={{width:20,height:20}}></Image>
          );
      }
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })
})

const AppContainer = createAppContainer(tabNavigator)

export default class App extends React.Component {

    constructor(props){
      super(props)
      this.state={
          time:false
      }
  }

  render(){
    setTimeout(()=>{
      this.setState({time:true})
    },1000)
    if(!this.state.time){
        return(
            <View style={{flex:1}} >
                <Image style={styles.image} source={require('./assets/doorimage1.jpg')}></Image>
            </View>
        )
    }
    else{
        return(
            <AppContainer></AppContainer>
        )
    }
  }
}

const styles=StyleSheet.create({
  image:{
      width:'100%',
      height:'100%',
      flex:1
  }
})