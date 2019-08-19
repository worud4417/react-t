import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,AsyncStorage} from 'react-native';
import {createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation'

import FirstScreen from './src/screens/FirstScreen';
import SearchScreen from './src/screens/SearchScreen';
import MessageScreen from './src/screens/MessageScreen';
import MyScreen from './src/screens/MyScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import MenuScreen from './src/screens/MenuScreen'
import LoginScreen from './src/screens/LoginScreen';

class Back extends React.Component{
  render(){
    return(
      <ImageBackground source={require('./assets/banner.jpg')} style={styles.imageback}>
        <Text style={styles.headerText}>GAME PAN</Text>
      </ImageBackground>
    )
  }
}

const defaultNavigationOptions={
  headerTitle:<Back></Back>
};

const HomeStack = createStackNavigator({
  'First':{
    screen:FirstScreen
  },
  'Menu':{
    screen:MenuScreen
  },
  'Login':{
    screen:LoginScreen
  }
},{
  defaultNavigationOptions
})

const SearchStack = createStackNavigator({
  'Search':{
    screen:SearchScreen
  },
  'Menu':{
    screen:MenuScreen
  },
  'Login':{
    screen:LoginScreen
  }
},{
  defaultNavigationOptions
})

const MessageStack = createStackNavigator({
  'Message':{
    screen:MessageScreen
  },
  'Menu':{
    screen:MenuScreen
  },
  'Login':{
    screen:LoginScreen
  }
},{
  defaultNavigationOptions
})

const MyStack = createStackNavigator({
  'My':{
    screen:MyScreen
  },
  'Menu':{
    screen:MenuScreen
  },
  'Login':{
    screen:LoginScreen
  }
},{
  defaultNavigationOptions
})

const TransactionStack = createStackNavigator({
  'Transaction':{
    screen:TransactionScreen
  },
  'Menu':{
    screen:MenuScreen
  },
  'Login':{
    screen:LoginScreen
  }
},{
  defaultNavigationOptions
})

const tabNavigator = createBottomTabNavigator({
  'My':{
    screen:MyStack
  },
  'Search':{
    screen:SearchStack
  },
  'Home':{
    screen:HomeStack
  },
  'Transaction':{
    screen:TransactionStack
  },
  'Message':{
    screen:MessageStack
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
      else if(routeName === 'Search'){
        return (
          <Image source={require('./assets/search.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'Message'){
        return (
          <Image source={require('./assets/message.png')} style={{width:20,height:20}}></Image>
          );
      }
      else if(routeName === 'My'){
        return (
          <Image source={require('./assets/my.png')} style={{width:20,height:20}}></Image>
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
    },
  }),
  initialRouteName:'Home'
})

const AppContainer = createAppContainer(tabNavigator)

export default class App extends React.Component {

    constructor(props){
      super(props)
      this.state={
          time:false
      }
      AsyncStorage.clear()
  }

  _setUser = async()=>{
    try{
      await AsyncStorage.setItem('SuperUser','0000')
    }
    catch(error){
      await AsyncStorage.setItem('error','true')
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
      this._setUser() 
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
  },
  headerText:{
    fontSize:30,
    fontFamily:"monospace",
    color:"black",
    fontWeight:"bold"
  },
  imageback:{
    width:"120%",
    height:"100%",
    position:'absolute',
    left:"-20%",
    justifyContent:'center',
    alignItems:'center'
  }
})