import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Base from '../components/base.js';

export default class DetailScreen extends Component{
  render(){
  return (
        <View style={styles.container}>
          <Base goProps={this.props}></Base>
          {/* <Base link1={()=>this.props.naviagtion.goBack()} props = {this.props}></Base> */}
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  