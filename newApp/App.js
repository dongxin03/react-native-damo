/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,BackHandler} from 'react-native';
import MainPage from './MainPage.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount(){
    if (Platform.OS === 'android') {
      const granted = await this.requestReadPermission();
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        BackHandler.exitApp();
        return;
      }
      await this.requestCameraPermission();
      // await this.requestExternalStorage();
     // await this.requestLocationPermission();
    //  await this.requestPhonePermission();
    }
 }
 async requestReadPermission() {
  try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return granted;
    } else {
      this.show('存储权限获取失败');
    }
  } catch (err) {
    this.show(err.toString())
  }
}
 async requestCameraPermission() {
     try {
         const granted = await PermissionsAndroid.request(
             PermissionsAndroid.PERMISSIONS.CAMERA,
         )
         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             this.show("你已获取了相机权限")
         } else {
             this.show("获取相机失败")
         }
     } catch (err) {
         this.show(err.toString())
     }
 }
 show(text){
     alert(text);
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <MainPage name="props传递"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
