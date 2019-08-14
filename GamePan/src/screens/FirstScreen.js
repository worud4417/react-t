import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

import ContentListComponent from '../components/ContentListComponent'

let content =[
    {
        number:0,
        image:'https://cnet1.cbsistatic.com/img/-8OMdJa3DGw53_Xxdoi7mc-ZWYg=/980x551/2018/04/26/da817b98-516f-4213-9fa8-959378b900e4/pubgmobilejp.jpg',
        name:'battleground',
        content:'fisrt blood',
        populer:0
    },
    {
        number:1,
        image:'https://pgr21.com/pb/data/humor/1557745508_1557744477.gif',
        name:'manonthe',
        content:'fisrt blood!!!',
        populer:2
    },
    {
        number:2,
        image:'http://optimal.inven.co.kr/upload/2018/10/01/bbs/i15398841953.png',
        name:'blockjaein',
        content:'fucking dogbaby',
        populer:10
    },
    {
        number:3,
        image:'http://optimal.inven.co.kr/upload/2018/10/01/bbs/i15398841953.png',
        name:'blockjaein',
        content:'fucking dogbaby',
        populer:11
    }
]

export default class FirstScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            content:content
        }
    };

    static navigationOptions = ({navigation})=>{
        console.log("First")
        return{
            tabBarLabel:"App",
            headerStyle:{
                backgroundColor:"black",
            },
        }
    }

    render(){
        return(
            <View>
                <ContentListComponent content={this.state.content}></ContentListComponent>
            </View>
        )
    }
}