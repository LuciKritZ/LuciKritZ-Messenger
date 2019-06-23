import React, {Component} from 'react';
import {Text, Alert, TouchableOpacity, View, StatusBar, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../Info/userDetails';
import styles from '../../constants/styles';
import firebase from "firebase";

export default class Login extends Component{
  static navigationOptions = {
    header: null
  }

  state = {
    phone: '',
    name: '',
    // ---- Validations ----
    // opacity: 0.5,
    // disabledStatus: true
  }

  componentWillMount(){
    AsyncStorage.getItem('userPhone').then(val => {
      if(val){
        this.setState({phone: val})
      }
    })
  }

  handleChange = key => val => {
    this.setState({
      [key]: val
    })

    // ---- Validations ----
    // if(this.state.phone.length < 10 || this.state.name.length < 1){
    //   this.setState({
    //     opacity: 1,
    //     disabledStatus: false
    //   })
    // }
    // else{
    //   this.setState({
    //     opacity: 0.5,
    //     disabledStatus: true
    //   })
    // }

  }

  submitForm = async () => {
    if(this.state.name.length < 3){
      Alert.alert('Error', 'Please choose a bigger name.')
    }
    else{
      //saving the data
      await AsyncStorage.setItem('userPhone', this.state.phone)
      User.phone = this.state.phone;
      firebase.database().ref('users/' + User.phone).set({name: this.state.name});
      this.props.navigation.navigate('App');
    }
    alert(this.state.phone +'\n'+this.state.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder= "Phone Number"
          keyboardType= "number-pad"
          style = {styles.input}
          value = {this.state.phone}
          onChangeText = {this.handleChange('phone')}
          maxLength={10}
        />
        <TextInput
          placeholder="Name"
          style = {styles.input}
          value = {this.state.name}
          onChangeText = {this.handleChange('name')}
          maxLength={30}
        />
        <TouchableOpacity
          // ---- VALIDATIONS ----
          // style={[styles.btn, {opacity: this.state.opacity}]}
          // disabled={this.state.disabledStatus}
          style={styles.btn}
          onPress={this.submitForm}
        >
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}