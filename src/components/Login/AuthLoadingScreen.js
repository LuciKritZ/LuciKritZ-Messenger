import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import User from "../Info/userDetails";
import firebase from "firebase";
import FirebaseConfig from '../Info/config'
// ---- For Splash Screen ----
import SplashScreen from 'react-native-splash-screen';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem("userPhone");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    SplashScreen.show();
    setTimeout(() => {
      SplashScreen.hide();
      this.props.navigation.navigate(User.phone ? "App" : "Auth");
      //call the API here
      //This is where the real navigation will occur.
    }, 1400)
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
