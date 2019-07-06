import React, {Component} from 'react';
import {Text, Alert, TouchableOpacity, View, StatusBar, TextInput, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../Info/userDetails';
import styles from '../../constants/styles';
import firebase from "firebase";

export default class Register extends Component{
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    password: '',
    name: ''
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
    var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,15}$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.email.match(email) && this.state.password.match(passw) && this.state.name !== ""){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert("Error", errorMessage)
        });
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
              AsyncStorage.setItem('userEmail', this.state.email)
              User.email = this.state.email;
              User.details = firebaseUser;
              this.props.navigation.navigate("App")
              console.warn(User.details)
            }
        })
    }
    else{
        Alert.alert("Error", "Please fill all the details correctly.")
    }
  }

  createAccount = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,15}$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
                    <Text style={{margin: "3%"}}>Register Here!</Text>
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
                    {
                        this.state.email.match(email) ?
                        null :
                        <View style={styles.validations}>
                            <Text>
                                Enter a valid email address.
                            </Text>
                        </View>
                    }
                    <TextInput
                        placeholder="Password"
                        style = {styles.input}
                        value = {this.state.password}
                        onChangeText = {this.handleChange('password')}
                        maxLength={30}
                        autoCapitalize = "none"
                        secureTextEntry = {true}
                    />
                    {
                        this.state.password.match(passw) ?
                        null :
                        <View style={styles.validations}>
                            <Text>
                                A password should contain 7 to 15 characters,
                                numeric digits, special character and
                                first character must be a letter.
                            </Text>
                        </View>
                    }
                    <TextInput
                        placeholder="Full Name"
                        style = {styles.input}
                        value = {this.state.name}
                        onChangeText = {this.handleChange('name')}
                        maxLength={30}
                    />
                    {
                        this.state.name == "" ?
                        <View style={styles.validations}>
                            <Text>
                                Name can not be empty.
                            </Text>
                        </View>
                        :
                        null
                    }
                    <TouchableOpacity
                        style={[styles.btn, {margin: "4%"}]}
                        onPress={this.submitForm}
                    >
                    <Text style={styles.btnText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
  }
}