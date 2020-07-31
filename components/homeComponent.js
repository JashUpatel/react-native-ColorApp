import React, { Component } from 'react';
import { View, Text,Platform, ScrollView, Dimensions, KeyboardAvoidingView, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity, FlatList, TextInput } from 'react-native';
import ColorButton from './colorButton';
import ColorForm from './ColorForm';
import WebPage from './webComponent';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
const screenHeight = Dimensions.get('window').height

const availableColors=['red','green','blue','yellow'];


class Home extends Component {


  constructor(props){
    super(props);
    this.state={
      backgroundColor: '#fcfcfc',
      availableColors:availableColors

    }
    console.log('state value'+this.state.availableColors)
    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);
    this.addNewColor = this.addNewColor.bind(this);



  }
  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(jsonValue)
      await AsyncStorage.setItem('@ColorApp-colorList', jsonValue)
    } catch (e) {
      console.log('saving error')
        }
  }

  getData = async () => {
      try {
        const availableColor = await AsyncStorage.getItem('@ColorApp-colorList');
        if (availableColor !== null) {
          console.log('1'+availableColor)

          var data = JSON.parse(availableColor)
          console.log('2'+data)
          this.setState({availableColors:data});
          // return availableColor
        } else {
          console.log('--data no .')

          this.setState({availableColors:availableColors});
        }
      } catch (e) {
        console.log('cant fetch -'+e);
      }
    };

  componentDidMount() {
    // SplashScreen.hide();
    this.getData()
  }

  componentWillUnmount() {
      this.storeData(this.state.availableColors);
    }

  change(backgroundColor){
    this.setState({backgroundColor: backgroundColor});

  }

  remove(color){
    var arr = this.state.availableColors
    for( var i = 0; i < arr.length; i++)
    {
      if ( arr[i] === color)
       {
         arr.splice(i, 1);
       }
     }//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
    this.setState({availableColors:arr});

  }

  delete(backgroundColor){
    Alert.alert(
      'Delete Color',
                'Are you sure you wish to delete '+ backgroundColor + ' from the list?',
                [
                    {
                        text: 'Cancel',
                        onPress: ()=>console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text:'OK',
                        onPress:()=>{this.remove(backgroundColor)}
                    }

                ],

                )


    }


  addNewColor(newcolor){

    if(newcolor!=''&& !this.state.availableColors.includes(newcolor) &&newcolor.search(/[0-9]/) && newcolor.search(/[\\$&+,:;?@&*_%!{}^|//<>-]/g)){
    availableColors.push(newcolor);
    this.setState({availableColors});
    this.storeData(this.state.availableColors);

  }
  else if(newcolor=='' || newcolor.length<3 || newcolor.length>17)
  {
    Alert.alert('Invalid Input!','Enter a valid color name.')
  }
  else{
    Alert.alert('Color not detected!','Check the color name in the Color List and try again.'+'\n\n'+'enter a color name or hexcode(eg: #ffffff ) or rgba value(eg: rgba(0,0,0,1) )')
  }
  }

  // <KeyboardAvoidingView keyboardVerticalOffset behavior={Platform.OS == "ios" ? "padding" : "height"}>

  render(){
    const {navigate} = this.props.navigation;

    function renderItem({item}){
      return(
        <ColorButton backgroundColor={item} onSelect={(item)=>Alert.alert('color')}/>
      );
    }
    return(

      <ScrollView contentContainerStyle={{backgroundColor:this.state.backgroundColor}}>
      <View style={{flexGrow:1}}>
      <ScrollView contentContainerStyle={[styles.container,{backgroundColor:this.state.backgroundColor,flexGrow:1}]}>
      <Animatable.View animation='fadeInDownBig' duration={1000} >
      <ColorForm browse={()=>{navigate('Color List')}} addColor={(newcolor)=>this.addNewColor(newcolor)} />
      </Animatable.View>

      <Animatable.View style={{width:'100%'}} animation='slideInUp' duration={2000} >

            <TouchableHighlight elevation style={[styles.button,{backgroundColor:'#fff'},{marginTop:30}]} underlayColor='#9e9e9e94' onPress={()=>{this.change('#fcfcfc')}}>
            <View style={styles.row}>
            <View style={styles.circle}/>
            <Text style={styles.mainText}>Reset</Text>
            </View>
            </TouchableHighlight>


      {this.state.availableColors.map(color=>

        <ColorButton backgroundColor={color} onSelect={(color)=>this.change(color)} onDelete={(color)=>this.delete(color)} />

      )}
      </Animatable.View>

      </ScrollView>
      </View>
</ScrollView>

      );
  }


}

const styles = StyleSheet.create({
  container:{
    minHeight:screenHeight,
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



  circle:{
    height:25,
    width:25,
    borderWidth:1.75,
    borderRadius:13,
    marginVertical:6,
    backgroundColor:'#fff'
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




export default Home;
