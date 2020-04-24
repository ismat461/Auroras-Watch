import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Email from './src/login/email.js';
import Timerscreen from './src/login/timerscreen.js';
import Genre from './src/login/genre.js';
import Rock from './src/login/rock.js';
import Classical from './src/login/classical.js';
import BPM from './src/login/bpm.js';
import Country from './src/login/country.js';
import Pop from './src/login/pop.js';
import Lullaby from './src/login/lullaby.js';
import Other from './src/login/other.js';




const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Sign: { screen: Signup },
  Email: { screen: Email },
  Timer: {screen: Timerscreen},
  Genre: {screen: Genre},
  Rock: {screen: Rock},
  Classical: {screen: Classical},
  BPM: {screen: BPM},
  Country: {screen: Country},
  Pop: {screen: Pop},
  Lullaby: {screen: Lullaby},
  Other: {screen: Other},

 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

