// import React,{Component} from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import Base from '../components/base.js';

// export default class DetailScreen extends Component{
//   render(){
//   return (
//         <View style={styles.container}>
//           <Base navigation={this.props.navigation}></Base>
//           {/* <Base link1={()=>this.props.naviagtion.goBack()} props = {this.props}></Base> */}
//         </View>
//       );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  
import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DetailScreen extends Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:30,fontWeight:'bold'}}>상세페이지</Text>
        <Text style={styles.title}>{this.props.navigation.getParam('item').title}</Text>
        <Text style={styles.body}>{this.props.navigation.getParam('item').content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    margin:20,
    fontWeight:'900'
  },
  body:{
    fontSize:20,
    margin:20
  }
})