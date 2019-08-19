import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

import MenuSectionListComponent from '../components/MenuSectionListComponent';

export default class MenuListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            hide:true
        }
    }

    changeHide(){
        if(this.state.hide==true){
            this.setState({hide:false})
        }
        else{
            this.setState({hide:true})
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.changeHide.bind(this)}>
                    <View style={{borderWidth:2}}>
                        <Text style={styles.text}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>
                <MenuSectionListComponent hide={this.state.hide} content={this.props.content}></MenuSectionListComponent>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    text:{
        fontSize:40,
        fontWeight:'bold',
        marginLeft:10
    }
}
)