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

const TabNavigator  = createBottomTabNavigator({
  First: {
    screen: FirstScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/home.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    } 
  },
  GameChannel: {
    screen: GameChannelScreen,
    navigationOptions: {
      tabBarLabel: 'GameCh',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/channel.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }, 
  HotIssue: {
    screen: HotIssueScreen,
    navigationOptions: {
      tabBarLabel: 'Hot',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/sun.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Personal: {
    screen: PersonalScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/settings.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Transaction: {
    screen: TransactionScreen,
    navigationOptions: {
      tabBarLabel: 'Trans',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/transaction.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }
}, 
{
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
},
{
  defaultNavigationOptions
})

const StackNavigator = createStackNavigator({
  tab:{
    screen:TabNavigator
  }
},
{
  defaultNavigationOptions
});

const AppContainer = createAppContainer(StackNavigator);

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
            <View style={{flex:1}}>
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