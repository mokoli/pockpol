import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
const colorArray = ["#93d2c7", "#ed4d61", "#b778b5", "#f8b920", "#08aadd"];

export default class ConvoContainer extends React.Component {
  render() {
    const { convo, convo: { topic, claps, callins }} = this.props;
    return (
      <View style={styles.holder}>
        <View style={[styles.button, { backgroundColor: colorArray[Math.floor(Math.random() * 5)]
          }]}>
          <Text style={styles.topic}>{topic}</Text>
          <View style={styles.votes}>
            <Image source={require('./../img/claps.png')}
              style={styles.icons} />
            <Text style={styles.voteText}>{claps}</Text>
            <Image source={require('./../img/callins.png')}
              style={styles.icons} />  
            <Text style={styles.voteText}>{callins}</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
holder: {
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  borderRadius: 30,
  height: height/6,
  width: width-20,
  justifyContent: 'center',
  marginBottom: 15,
},
topic: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
  color: '#FFFFFF'
},
icons: {
  width: 30,
  height: 30,
  marginRight: 3,
},
votes: {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: 5,
},
voteText: {
  color: "rgba(255,255,255,0.7)",
  marginRight: 15,
},
});