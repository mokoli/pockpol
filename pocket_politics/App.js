/**
 * Pocket Politics from
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * By: Marissa Okoli
 * 5/2/18
 */

import React, { Component } from 'react';
import {
  // Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import { convos } from './js/dummydata';
import ConvoContainer from './js/components/ConvoContainer'
import InputPopup from './js/components/InputPopup'

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {}; */

export default class App extends Component/*<Props>*/ {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Pocket Politics
          </Text>
        </View>
        <FlatList
          keyExtractor = {(item, index) => index.toString()}
          data={convos}
          renderItem={({item}) => <ConvoContainer convo={item} key={item.index} />}
        />
        <InputPopup />
        {/* <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {convos.map((convo, index) => <ConvoContainer
          convo={convo}
          onOpen={this.expConvo}
          key={index}
          />)}
        </ScrollView>  */}
      </View>
      /* <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    position: "relative",
  },
  header: {
    alignItems: 'center',
    padding: 5,
    borderWidth: 15,
    borderRadius: 2,
    borderColor: '#555',
    backgroundColor: "#ddd",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
});