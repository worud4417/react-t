import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup'
import BlinkApp from './src/components/BlinkApp';
import StyleApp  from './src/components/StyleApp';
import BoxApp from './src/components/BoxApp';
import Header from './src/components/Header';

import BaseTextInput from './src/components2/BaseTextInput';
import ButtonGroup from './src/components2/ButtonGroup';
import Button2  from './src/components2/Button2';
import SectionListBasic from './src/components2/SectionListBasic';
import FlatListBasic from './src/components2/FlatListBasic';

export default function App() {

  return (
    // <View style={styles.container}>
    //   <View style={{flex:1,backgroundColor:'red'}}>
    //     <Text>Hello React Native!</Text>
    //     <Text>By LJK</Text>
    //   </View>
    //   <View style={{flex:2,backgroundColor:'blue'}}>
    //     <Banana></Banana>
    //   </View>
    //   <View style={{flex:3,backgroundColor:'black'}}>
    //   <GreetingGroup></GreetingGroup>
    //     <BlinkApp></BlinkApp>
    //     <StyleApp></StyleApp>
    //     <BoxApp></BoxApp>
    //   </View>
    // </View>
    // <View style={{flex:1}}>
    //   <View style={{flex:1,backgroundColor:'red'}}></View>
    //   <View style={{flex:5,backgroundColor:'green',flexDirection:'row'}}>
    //     <View style={{flex:1,backgroundColor:"f0000"}}></View>
    //     <View style={{flex:4,backgroundColor:"f0000",flexDirection:'column'}}>
    //       <View style={{flex:1,backgroundColor:"white"}}></View>
    //       <View style={{flex:1,backgroundColor:"blue"}}></View>
    //     </View>
    //   </View>
      
    // </View>
    <View style = {styles.container}>
      <BaseTextInput></BaseTextInput>
      {/* <ButtonGroup></ButtonGroup> */}
      <Button2></Button2>
      {/* <SectionListBasic></SectionListBasic> */}
      <FlatListBasic></FlatListBasic>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef',
    textDecorationColor : '#D0F',
    color:'#D0D',
    justifyContent: 'center',
    alignItems:'center',
  },
});
