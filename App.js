import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import  Main  from './components/mainComponent';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={styles.container}>

    <StatusBar barStyle={"light-content"} hidden={false} backgroundColor="#f8fbf8" translucent = {false}  />



      <Main />

    </View>
    </SafeAreaView>
    // <Text>Open up App.js to start working on your app</Text>
    // <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
