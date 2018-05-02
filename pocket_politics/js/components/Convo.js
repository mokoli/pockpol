import React, { PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default class Convo extends React.Component {
  // Component prop types
  static propTypes = {
    // Convo object with post, votes, comments
    convo: PropTypes.object.isRequired,
    // Called when user taps on a convo
    onExt: PropTypes.func.isRequired,
  }
  render() {
    const { convo, convo: { title, genre, poster }, onExt } = this.props;
    return ( 
      <View style={} onPress={() => onExt(convo)}>>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
      </View>
    );
  }
}