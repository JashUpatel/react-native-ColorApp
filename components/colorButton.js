import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ColorButton=({backgroundColor,onDelete=f=>f,onSelect=f=>f})=>(

    <TouchableHighlight
     style={styles.button}
      underlayColor='#9e9e9e94'
      onPress={()=>{onSelect(backgroundColor)}}
      onLongPress={()=>{onDelete(backgroundColor)}}

      >
    <View style={styles.row}>
    <View style={{flex:1,marginLeft:20}}>
    <View style={[styles.circle,{backgroundColor:backgroundColor}]}/>
    </View>
    <Text style={styles.mainText}>{backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1)}</Text>
    </View>
    </TouchableHighlight>

  );



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

  circle:{
    height:25,
    width:25,
    borderWidth:1.75,
    borderRadius:13,
    marginVertical:6,
    backgroundColor:'#fff'
  },

  mainText:{
    flex:2,
    fontSize: 20,
    color:'black',
    fontFamily:'monospace',
    fontWeight:'bold',
    marginVertical: 6,
    marginHorizontal: 75,
  },
  button:{
    borderWidth:1,
    borderRadius:50,
    margin:5,
    padding:10,
    alignSelf:'stretch',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }



});

export default ColorButton;
