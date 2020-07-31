import React from 'react'


import {
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import { WebView } from 'react-native-webview';

const WebPage = () => (
  <WebView style={styles.container}
          startInLoadingState={true}
           source={{ uri:'https://www.w3schools.com/colors/colors_names.asp'}}
           contentInset={{ top: 750 }} />
)



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WebPage
