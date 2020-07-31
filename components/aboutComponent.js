import React, { Component } from 'react';
import { View,Image, Text,Platform, ScrollView, Dimensions, KeyboardAvoidingView, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// import ColorButton from './colorButton';
// import ColorForm from './ColorForm';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
// const screenHeight = Dimensions.get('window').height

// const availableColors=['red','salmon','yellow','cyan','magenta','purple','green','blue','pink'];


class AboutUs extends Component {


  constructor(props){
    super(props);
    this.state={
      backgroundColor: '#fcfcfc',

    }
  }

  render(){

    return(
      <ScrollView>
      <View style={{flex:1}}>
      <ScrollView contentContainerStyle={[styles.container,{backgroundColor:this.state.backgroundColor},{ flexGrow: 1 }]}>

      <View style={styles.imgcontainer}>

      <Animatable.View animation='bounceIn' duration={2000} delay={1500} >
      <Image
        style={styles.Logo}
        source={require('./color.jpg')}
      />

      </Animatable.View>

      </View>
      <Animatable.View animation='fadeInDown' duration={2000} >

      <Card  title="About ColorApp" >
                  <Text style={{fontFamily:'sans-serif', fontSize:16}}>
                  ColorApp is fun color clicking game app made for entertaining purpose and enhancing one's creativity. Create your own favourite list of colors and unleash your creativity while playing around stunning colors - it's easy and fun. Create your very own color palletes!
                    {/* <br/><br/> */}
                  {"\n\n"}
                  Share the app among your friends to make a colorful community...
                  </Text>
          </Card>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' duration={2000} >

              <Card title="How to use?"  >
                          <Text style={{fontFamily:'sans-serif-thin',fontSize:16}}>
                          Just tap on the list of colors to pick that color and background color of the app will respond to that click by changing it's color.
                            {/* <br/><br/> */}
                          {"\n\n"}
                          You can also add your own colors to the list by entering you color name or hexcode or rgba value in the input box given and then by pressing on the add button below...
                          {"\n\n"}
                          You can also search for your favourite color by pressing the browse button given.
                          {"\n\n"}
                          Have fun using this App.
                          </Text>
              </Card>
              </Animatable.View>

              <Text style={{marginTop:25,fontSize:16,fontFamily:'Roboto'}}>Copyright &copy; ColorApp</Text>
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
    width:100,
    height:100,
    borderWidth:1,
    borderRadius:100,

  },
  container:{
    flex:1,
    alignItems: 'center',
    padding:25,
    justifyContent:'center'

  },

});




export default AboutUs;
