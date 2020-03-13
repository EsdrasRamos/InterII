import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import  DatePicker  from 'react-native-datepicker';
import email from 'react-native-email';

 
export default class Info extends React.Component {
constructor(props) {
    super()
    this.state={
    name:'',
    surname:'',
    date:'',
    bestCandidate:''

}
this.changeDate=this.changeDate.bind(this)
}

changeN=(n)=>{
    this.setState({
        name:n
    })
}
changeS=(s)=>{
    this.setState({
        surname:s
    })
}
changeDate=(value)=>{
    this.setState({
        date: value

    })
}
changeBest=(best)=>{
    this.setState({
        bestCandidate:best
    })
}





  render() {

    

    return (
      <View style={styles.container}>
          <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Name"
          placeholderTextColor='#ffffff'
          autoFocus={true}
          onSubmitEditing={()=> this.surname.focus()}
          name={this.state.name}
          onChangeText={this.changeN}/>

          <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Surname"
          placeholderTextColor='#ffffff'
          ref={(input)=>this.surname = input}
          onSubmitEditing={()=> this.text.focus()}
          surname={this.state.surname}
          onChangeText={this.changeS}/>

          <DatePicker
           format='DD,MMM,YYYY'
           style={styles.dateComponent}
           date={this.state.date}
           onDateChange={this.changeDate}

          />

          <TextInput style={styles.inputBox}
          multiline={true}
          numberOfLines={4}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Why are you the best candidate?"
          editable={true}
          placeholderTextColor='#ffffff'
          ref={(input)=>this.text = input}
          bestCandidate={this.state.bestCandidate}
          onChangeText={this.changeBest}/>

          <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText} onPress={this.handleEmail}>Submit </Text>
          </TouchableOpacity>
        <Text> </Text>
      </View>
    );
  }
  handleEmail = () => {
    const to = 'info@intercity.com.na' // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: 'ramosesdras94@gmail.com', // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: 'Why I am the one!',
        body:
        ' |Name: '+ this.state.name+
        ' |Surname: '+this.state.surname+
        ' |Date of birth: '+this.state.date+
        ' |Why I am the best candidate: '+this.state.bestCandidate
    }).catch(console.error)
}
}

const styles=StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'center',
    alignItems:'center'
    
   
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:18
  },
  button:{
    width:300,
    backgroundColor:'#1c313a',
    borderRadius:25,
    marginVertical:18,
    paddingVertical:10
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'

  },
  dateComponent:{
    width:300,
    height:40,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    marginVertical:18,
    borderBottomColor:'rgba(255,130,80,0.1)'
  }
}); 