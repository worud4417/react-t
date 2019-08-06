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
        board:board,
        lastBoardId:3
      };
    }

    createBoard(boardItem){
      this.setState({lastBoardId:(this.state.lastBoardId+1)})
      const itemKey = this.state.lastBoardId.toString()
      const item = {
        key: itemKey,
        title : boardItem.title,
        content : boardItem.content
      }
      const board = this.state.board.concat(item);
      this.setState({board: board})
      return
    }

    deleteBoard(key){
      const board = this.state.board.filter(
        (item) => {
          if (item.key != key){
            return item
          }
        }
      )
      this.setState({board:board})
      return
    }

    editBoard(itemKey,title,content){
      const newBoard = this.state.board.map(
        (item)=>{
          if(item.key == itemKey){
            return {
              key:itemKey,
              title:title,
              content:content
            }
          }
          else{
            return item
          }
        }
      )
      this.setState({board:newBoard})
    }

    render(){
    return (
        <View style={styles.container}>
          <HomeBase link={()=> this.props.navigation.navigate('Detail')} props={this.props}></HomeBase>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}>
                    <Text style={{color:'red'}}>Setting 가기</Text>
            </TouchableOpacity>
            <MyButton onPress={()=>this.props.navigation.push('Create',{
              'createFunc':this.createBoard.bind(this)
            })}></MyButton>
            <BoardList board={this.state.board} navigation={this.props.navigation} deleteFunc={this.deleteBoard.bind(this)}
            editFunc={this.editBoard.bind(this)}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3333',
      alignItems: 'center',
    },
  });
  