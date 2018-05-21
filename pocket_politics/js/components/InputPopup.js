import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
} from 'react-native';

import { convos } from './../dummydata';
import ConvoContainer from './ConvoContainer'

export default class InputPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', vis: "none", };
  }

  onPress = () => {
    this.setState({
      vis: this.state.vis=="none" ? "flex" : "none"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={[styles.tinput, {display: this.state.vis}]}
          placeholder="   What to say?"
          //onSubmitEditing={(text) => boo}
        />
        <TouchableOpacity style={styles.writeButton} onPress={this.onPress}>
          <Image
            style={styles.button}
            source={require('./../img/writing.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 90,
    right: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  tinput: {
    height: 74,
    width: "72%",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 5,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,

  },
  writeButton: {
    opacity: 0.8,
  },
  button: {
    width: 80,
    height: 80,
    borderColor: "#ed4d61",
  },
});