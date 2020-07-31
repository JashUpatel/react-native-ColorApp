import React, { Component } from 'react';
import { View,Image, Text,Platform,Share, ScrollView, Dimensions, KeyboardAvoidingView, StyleSheet, Alert, TouchableHighlight, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// import ColorButton from './colorButton';
// import ColorForm from './ColorForm';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
// const screenHeight = Dimensions.get('window').height

// const availableColors=['red','salmon','yellow','cyan','magenta','purple','green','blue','pink'];


class ShareComp extends Component {


  constructor(props){
    super(props);
    this.state={
      backgroundColor: '#fcfcfc',

    }
    this.invite = this.invite.bind(this);

  }

  invite(){
     Share.share({
       title:'ColorApp',
       message: 'Checkout this new app'+ '\n' +'Download the ColorApp'+'\n' + 'https://drive.google.com/drive/folders/10OqQ5hTwe-b213yMsncJ_xmF58nF4D3j?usp=sharing',
       url:'https://drive.google.com/drive/folders/10OqQ5hTwe-b213yMsncJ_xmF58nF4D3j?usp=sharing'
     },{
       dialogTitle:'Share ColorApp...'
     })

   }

  render(){

    return(
      <ScrollView>
      <View style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={[styles.container,{backgroundColor:this.state.backgroundColor},{ flexGrow: 1 }]}>

      <View style={styles.imgcontainer}>
      <Animatable.View animation='fadeIn' duration={2000} >

      <Image
        style={[styles.Logo,{color:'#fff',marginBottom:75,marginTop:75}]}
        source={require('./friends2.jpg')}
      />
      </Animatable.View>

      </View>
      <Text style={{fontSize: 20,
      color:'black',
      fontFamily:'Roboto',
      fontWeight:'bold',
      marginBottom:25
      }}> Share with your friends.... </Text>

      <Animatable.View animation='flipInY' duration={2000} >

      <Animatable.View iterationCount='infinite' iterationDelay={3000} animation='shake' duration={2000} delay={2000} >

      <TouchableHighlight
       style={styles.button}
        underlayColor='#9e9e9e94'
        onPress={()=>this.invite()}
        >
      <View style={styles.row}>
      <View style={{flex:1,marginLeft:20}}>
      <Icon
      name="share-square-o"
      type='font-awesome'
      size={15}
      color="#111111"
      />
      </View>
      <Text style={styles.mainText}>Share    </Text>
      </View>
      </TouchableHighlight>
      </Animatable.View>

      </Animatable.View>

      <Text style={{marginTop:150,fontSize:16,fontFamily:'Roboto'}}>Copyright &copy; ColorApp</Text>
      </ScrollView>
      </View>
</ScrollView>

      );
  }


}

const styles = StyleSheet.create({

  imgcontainer:{
    alignItems: 'center',
    padding:15,
    justifyContent:'center'

  },
  Logo:{
    backgroundColor:'white',
    width:250,
    height:250,
    borderWidth:1,
    borderRadius:150,

  },
  container:{
    flex:1,
    alignItems: 'center',
    padding:25,
    justifyContent:'center'

  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'space-around'
    // borderWidth:1,
    // paddingVertical:10,
    // paddingHorizontal:25,
  },


  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal:20

  },
  mainText:{
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
    backgroundColor:'#fff',
    justifyContent:'space-around',
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




export default ShareComp;
