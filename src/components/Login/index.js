import React, {Component} from 'react';
import {Text, Alert, TouchableOpacity, View, StatusBar, TextInput, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../Info/userDetails';
import styles from '../../constants/styles';
import firebase from "firebase";

export default class Login extends Component{
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    password: '',
    // ---- Validations ----
    // opacity: 0.5,
    // disabledStatus: true
  }

  componentWillMount(){
    AsyncStorage.getItem('userEmail').then(val => {
      if(val){
        this.setState({email: val})
      }
    })
  }

  handleChange = key => val => {
    this.setState({
      [key]: val
    })
  }

  submitForm = async () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      Alert.alert("Error", "No records found with this email address.")
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        AsyncStorage.setItem('userEmail', this.state.email)
        User.email = this.state.email;
        User.details = firebaseUser;
        this.props.navigation.navigate("App")
      }
    })
  }

  createAccount = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
            <Image
                source={require('../../images/logo.png')}
            />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#29c2d3" barStyle="light-content" />
            <Text style={{margin: "3%"}}>Login Here!</Text>
            <TextInput
                placeholder= "Email"
                keyboardType= "email-address"
                style = {styles.input}
                value = {this.state.email}
                onChangeText = {this.handleChange('email')}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                placeholder="Password"
                style = {styles.input}
                value = {this.state.password}
                onChangeText = {this.handleChange('password')}
                maxLength={30}
                autoCapitalize = "none"
                secureTextEntry = {true}
            />
            <TouchableOpacity
                style={[styles.btn, {margin: "4%"}]}
                onPress={this.submitForm}
            >
            <Text style={styles.btnText}>Enter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 40}}
              onPress={this.createAccount}
            >
              <Text>New here? Click here to register.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
    );
  }
}