import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import BoardList from '../components/BoardList.js';
import HomeBase from '../components/HomeBase.js';
import MyButton from '../components/MyButton.js';

let board = [
  {
    key:'1',
    title:'제목1',
    content: '내용1' 
  },
  {
    key:'2',
    title:"제목2",
    content:'내용2'
  }
];

export default class HomeScreen extends Component{

    constructor(props){
      super(props);
      this.state ={
        board:board
      };
    }

    render(){
    return (
        <View style={styles.container}>
          <HomeBase link={()=> this.props.navigation.navigate('Detail')} props={this.props}></HomeBase>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}>
                    <Text style={{color:'red'}}>Setting 가기</Text>
            </TouchableOpacity>
            <MyButton></MyButton>
            <BoardList board={this.state.board} navigation={this.props.navigation}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });
  