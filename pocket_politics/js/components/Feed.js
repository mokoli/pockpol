import React from 'react';
import { 
    ScrollView,
    Text,
    View 
} from 'react-native';

import { convos } from './../dummydata';

export default class Feed extends React.Component {
    render() {
      return (
        <View>
          <ScrollView>
            {convos.map((convo, index) => <Text>{convo.topic}</Text>)}
          </ScrollView>
        </View>
      );
    }
  }