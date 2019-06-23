import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import User from "../Info/userDetails";
import firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBCXpOg61Z399fxGeez-AjxpKRKZ-8shks",
      authDomain: "fir-chatapp-990f0.firebaseapp.com",
      databaseURL: "https://fir-chatapp-990f0.firebaseio.com",
      projectId: "fir-chatapp-990f0",
      storageBucket: "",
      messagingSenderId: "549873609856",
      appId: "1:549873609856:web:b9bbb35329ff635a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem("userPhone");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    this.props.navigation.navigate(User.phone ? "App" : "Auth");
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
