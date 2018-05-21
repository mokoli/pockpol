import React, { Component } from 'react';
import {
  // Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

// Get screen dimensions
const { w, h } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Pocket Politics
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    height: h/8,
    width: w,
    backgroundColor: '#fff',
    },
    header: {
    fontSize: 20,
    padding: 10,
    ...StyleSheet.absoluteFillObject,
  },
});