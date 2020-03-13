/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Login from './android/src/pages/Login';
import Signup from './android/src/pages/Signup';
import Info from './android/src/pages/Info';

import Routes from './android/src/Routes';

export default class app extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
        />
        <Login/>
        
        
       
      </View>
      
    );
    
  }

 
}
const AppNav = createStackNavigator ({
  Login:Login,
  Signup:Signup
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#455a64'
  },
  

});


