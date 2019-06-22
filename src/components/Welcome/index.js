import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component{
  splashScreen(){
    SplashScreen.show();
    // this.state.navigation.
  }

  componentDidMount(){
    setTimeout(() => {
      SplashScreen.hide();
    }, 1400)
  }

  render() {
    this.splashScreen();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
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
    color: '#29c2d3',
    marginBottom: 5,
  },