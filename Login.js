import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import GoogleSignins from '../components/GoogleSignins';
import Signup from './Signup';
import { NavigationActions } from 'react-navigation';


export default class Login extends Component { 
  render() { 
    const pressHandler=()=>{
      NavigationActions('Signup');
     }
    
    return (
      <View style={styles.container}>
        
        <Logo/>
        <Form type="Login"/>
        <GoogleSignins/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Button style={styles.signupButton} title='Signup' onPress={pressHandler} />
          
        </View>
      </View>
      
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#455a64',
    
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    color:'rgba(0,0,0,0.5)',
    fontSize:16

  },
  signupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
});
 