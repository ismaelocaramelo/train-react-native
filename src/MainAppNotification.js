import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Notification from './Notification';

class MainApp extends PureComponent {
  state = {
    notify: false,
    message: 'Lorem ipsum dolor sit amet...'
  };

  onToggleNotication = () => {
    this.setState(
      ({ notify }) => ({ notify: !notify }),
      () => console.log('update state', this.state)
    );
  };

  render() {
    const notify = this.state.notify ? (
      <Notification
        autoHide
        message={this.state.message}
        onClose={this.onToggleNotication}
      />
    ) : null;

    return (
      <View>
        <Text style={styles.toolbar}>Main toolbar</Text>
        <View style={styles.content}>
          <Text>Lorem ipsum....</Text>
          <TouchableOpacity
            onPress={this.onToggleNotication}
            style={styles.btn}
          >
            <Text style={styles.text}>Show notification</Text>
          </TouchableOpacity>
          <Text>Duis aute irure</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#8e44ad',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    padding: 10,
    overflow: 'hidden'
  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  }
});

export default MainApp;
