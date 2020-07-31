import React, { Component } from 'react';
import { View, Text,Platform, ScrollView,Image, Dimensions, KeyboardAvoidingView, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import ColorButton from './colorButton';
import ColorForm from './ColorForm';
import Home from './homeComponent';
import AboutUs from './aboutComponent';
import WebPage from './webComponent';
import Contact from './contactComponent';
import ShareComp from './shareComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import * as Animatable from 'react-native-animatable';


const screenHeight = Dimensions.get('window').height

const availableColors=['red','salmon','yellow','cyan','magenta','purple','green','blue','pink'];


const CustomDrawerContentComponent = (props) => (
    <ScrollView contentContainerStyle={{}}>
<View style={{flex:1,justifyContent:'space-between'}}>

        <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                <Image
                    source={require('./color.jpg')}
                    style={styles.drawerImage}
                />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>
                    ColorApp
                  </Text>
            </View>


            </View>

        <DrawerItemList {...props}/>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:375}}>

            <View style={styles.footer}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Made With <Animatable.Text duration={2000} animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text></Text>
            </View>
            </View>
            </View>

    </ScrollView>
);


const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen(){
  return(
    <HomeNavigator.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerStyle:{
        backgroundColor:'#f8fbf8',
        paddingTop:25,
        marginVertical:10,
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:23,
        marginLeft:75,
        fontWeight:'bold',
        color:'#111111'
      }
    }}>

    <HomeNavigator.Screen name='ColorApp' component={Home}
    options={
      ({ navigation })=>({
                        headerLeft: ()=>(
                            <Icon name='menu' size={32} color='#111111'
                            containerStyle={{marginHorizontal:20,fontWeight:'bold'}}
                             onPress={()=>navigation.toggleDrawer()}
                            />
                        )
                    })
    } />

    <HomeNavigator.Screen name='Color List' component={WebPage}
    options={{ headerTitle: "Color List", headerTintColor:'#111111'}}
     />


    </HomeNavigator.Navigator>

  );
}


const WebNavigator = createStackNavigator();

function WebNavigatorScreen(){
  return(
    <WebNavigator.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#f8fbf8',
        paddingTop:25,
        marginVertical:10,
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:23,
        marginLeft:75,
        fontWeight:'bold',
        color:'#111111'
      }
    }}>

    <WebNavigator.Screen name='Color List' component={WebPage}
    options={
      ({ navigation })=>({
                        headerLeft: ()=>(
                            <Icon name='menu' size={32} color='#111111'
                            containerStyle={{marginHorizontal:20,fontWeight:'bold'}}
                             onPress={()=>navigation.toggleDrawer()}
                            />
                        )
                    })
    } />


    </WebNavigator.Navigator>

  );
}


const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen(){
  return(
    <AboutNavigator.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#f8fbf8',
        paddingTop:25,
        marginVertical:10,
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:23,
        marginLeft:75,
        fontWeight:'bold',
        color:'#111111'
      }
    }} >

    <AboutNavigator.Screen name='AboutUs' component={AboutUs}
    options={
      ({ navigation })=>({
                        headerLeft: ()=>(
                            <Icon name='menu' size={32} color='#111111'
                            containerStyle={{marginHorizontal:20,fontWeight:'bold'}}
                             onPress={()=>navigation.toggleDrawer()}
                            />
                        )
                    })
    } />
    </AboutNavigator.Navigator>
  );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen(){
  return(
    <ContactNavigator.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#f8fbf8',
        paddingTop:25,
        marginVertical:10,
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:23,
        marginLeft:75,
        fontWeight:'bold',
        color:'#111111'
      }
    }} >

    <ContactNavigator.Screen name='Join Me' component={Contact}
    options={
      ({ navigation })=>({
                        headerLeft: ()=>(
                            <Icon name='menu' size={32} color='#111111'
                            containerStyle={{marginHorizontal:20,fontWeight:'bold'}}
                             onPress={()=>navigation.toggleDrawer()}
                            />
                        )
                    })
    } />

    </ContactNavigator.Navigator>
  );
}

const ShareNavigator = createStackNavigator();

function ShareNavigatorScreen(){
  return(
    <ShareNavigator.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#f8fbf8',
        paddingTop:25,
        marginVertical:10,
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:23,
        marginLeft:75,
        fontWeight:'bold',
        color:'#111111'
      }
    }} >

    <ShareNavigator.Screen name='Share' component={ShareComp}
    options={
      ({ navigation })=>({
                        headerLeft: ()=>(
                            <Icon name='menu' size={32} color='#111111'
                            containerStyle={{marginLeft:20,fontWeight:'bold'}}
                             onPress={()=>navigation.toggleDrawer()}
                            />
                        )
                    })
    } />
    </ShareNavigator.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen(){
  return(
    <MainNavigator.Navigator initialRouteName='Home'
    drawerStyle={{backgroundColor:'#edeeef'}}
    drawerContent={props=><CustomDrawerContentComponent {...props}/>}
    >
    <MainNavigator.Screen name='Home'  component={HomeNavigatorScreen}
    options={{
      drawerIcon:({tintColor})=>(
        <Icon name='home' type='font-awesome'
        size={26}
        color={tintColor} />
      )
    }} />


    <MainNavigator.Screen name='Color List' component={WebNavigatorScreen}
    options={{
      drawerIcon:({tintColor})=>(
        <Icon name='search' type='font-awesome'
        size={24}
        color={tintColor} />
      )
    }} />


    <MainNavigator.Screen name='AboutUs' component={AboutNavigatorScreen}
    options={{
      drawerIcon:({tintColor})=>(
        <Icon name='info-circle' type='font-awesome'
        size={24}
        color={tintColor} />
      )
    }} />

    <MainNavigator.Screen name='Share with friends' component={ShareNavigatorScreen}
    options={{
      drawerIcon:({tintColor})=>(
        <Icon name='share-alt' type='font-awesome'
        size={24}
        color={tintColor} />
      )
    }} />



    <MainNavigator.Screen name='Developer Contact' component={ContactNavigatorScreen}
    options={{
      drawerIcon:({tintColor})=>(
        <Icon name='user-circle-o' type='font-awesome'
        size={24}
        color={tintColor} />
      )
    }} />
    </MainNavigator.Navigator>


  );

}


class Main extends Component {



  render(){

    return(
              <NavigationContainer>
              <MainNavigatorScreen />
              </NavigationContainer>
      );
  }


}

const styles = StyleSheet.create({
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


  drawerHeader: {
    borderBottomWidth:1.25,
    borderColor:'#111111',
      backgroundColor: '#f8fbf8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    footer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      position:'absolute',
      bottom:0,
      marginTop:300,

    },
    drawerHeaderText: {
      color: '#111111',
      fontSize: 22,
      marginLeft:18,
      fontWeight: 'bold'
    },
    drawerImage: {
      borderRadius:80,
      marginLeft: 20,
      width: 75,
      height: 75
    }



});


export default Main;
