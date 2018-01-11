import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

class ConversationListScreen extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Conversations</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(ConversationListScreen);