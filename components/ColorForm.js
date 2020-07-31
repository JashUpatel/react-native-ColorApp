import React , { Component } from 'react';
import {Text,KeyboardAvoidingView, ScrollView, View,Platform, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

class  ColorForm extends Component {
  constructor(props){
    super(props);
    this.state={
      newcolor:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onBrowse = this.onBrowse.bind(this);


  }

  onSubmit(){
    this.props.addColor(this.state.newcolor.trim().toLowerCase())
    this.setState({newcolor:''})
  }

  onBrowse(){
    this.props.browse()
  }
  render(){
    // const {navigate} = this.props.navigation;
  return(
    <View>
    <TextInput style={styles.input} onChangeText={(color)=>this.setState({newcolor:color})} value={this.state.newcolor} placeholder='enter your color...' />
    <View style={styles.row}>

    <TouchableHighlight elevation style={styles.button} underlayColor='#9e9e9e94' onPress={()=>this.onSubmit()}>
    <Text style={styles.mainText}>Add</Text>
    </TouchableHighlight>

    <TouchableHighlight elevation style={styles.button} underlayColor='#9e9e9e94' onPress={()=>this.onBrowse()}>
    <Text style={styles.mainText}>Browse</Text>
    </TouchableHighlight>
    </View>


    </View>

  );
}
}


const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'space-around'
    // borderWidth:1,
    // paddingVertical:10,
    // paddingHorizontal:25,
  },

  input:{
    height:60,
    margin:5,
    fontFamily:'monospace',
    backgroundColor:'rgba(255,255,255,0.75)',
    padding:10,
    borderWidth:1.75,
    borderRadius:30,
    alignSelf:'stretch',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'

  },


  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal:20

  },
  mainText:{
    fontSize: 18,
    color:'white',
    fontFamily:'monospace',
    fontWeight:'bold',
    marginVertical: 6,
    // marginHorizontal: 75,
  },
  button:{
    height:50,
    width:150,
    borderWidth:1.75,
    borderColor:'white',
    borderRadius:50,
    margin:5,
    padding:10,
    alignSelf:'stretch',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'rgba(0,0,0,0.9)'
  }


  }
);



export default ColorForm;
