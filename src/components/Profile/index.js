import React from 'react';
import {SafeAreaView, Text, TextInput, Alert} from 'react-native';
import User from '../Info/userDetails';
import styles from '../../constants/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: "Profile"
    }

    state = {
        name: User.name,
    }

    handleChange = key => val => {
        this.setState({
            [key]: val
        })
    }

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
      };

    changeName = async () => {
        if(this.state.name.length < 3) {
            Alert.alert('Error', 'Please enter a valid name.')
        }
        else if(User.name !== this.state.name){
            firebase.database().ref('users').child(User.phone).set({name: this.state.name});
            User.name = this.state.name;
            Alert.alert('Success', 'Name changed successfully!')
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize: 20, }}>
                    {User.phone}
                </Text>
                <Text >
                    {User.name}
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleChange('name')}
                />
                <TouchableOpacity style={styles.btn} onPress={this.changeName}>
                    <Text style={styles.btnText}>Change Name</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._logOut} style={styles.btn}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}