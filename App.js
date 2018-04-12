import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';

const Navigation = StackNavigator({
  Login: { screen: Login },
  Profile: {screen: Profile},
  }, {
    navigationOptions: {
      header: false,
    }
  });

export default class App extends React.Component {

  render() {
    return <Navigation />
  }
}

