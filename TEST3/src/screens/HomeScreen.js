import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import HomeBase from '../components/HomeBase.js';

export default class HomeScreen extends Component{
    render(){
    return (
        <View style={styles.container}>
          <HomeBase link={()=> this.props.navigation.navigate('Detail')} props={this.props}></HomeBase>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}>
                    <Text style={{color:'red'}}>Setting 가기</Text>
            </TouchableOpacity>
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
  