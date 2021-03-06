import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import User from "../Info/userDetails";
import styles from "../../constants/styles";
import firebase from "firebase";

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: "Chats",
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../../images/user.png')} style={{width: 32, height: 32, marginRight: 10}} />
          </TouchableOpacity>
        )
    }
  };

  state = {
    users: []
  };

  componentDidMount() {
    console.warn(User.details)
  }

  _logOut = async () => {
    AsyncStorage.clear();
    firebase.auth().signOut();
    this.props.navigation.navigate("AuthLoading");
  };

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => this.props.navigation.navigate("Chat", item)}
      >
        <Text style={styles.listText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={item => item.phone}
        />
        <TouchableOpacity onPress={this._logOut}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}