import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <Hello />
        <Text/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
});
