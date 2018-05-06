import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

const heartIcon = require('./images/plain-heart.png');

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center'
  },
  btn: {
    borderRadius: 5,
    padding: 10
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1'
  },
  liked: {
    tintColor: '#e74c3c'
  },
  text: {
    marginTop: 20
  }
});

const testStyles = {
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1'
  },
  liked: {
    tintColor: '#e74c3c'
  }
};

class Toggle extends Component {
  state = {
    liked: false
  };

  onPress = () => {
    this.setState(
      ({ liked }) => {
        return { liked: !liked };
      },
      () => {
        console.log('State has changed', this.state);
      }
    );
  };

  render() {
    const likedStyles = () => (this.state.liked ? styles.liked : null);
    const combineStyles = StyleSheet.flatten([styles.icon, likedStyles()]);
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.btn}
          underlayColor="#fefefe"
        >
          <Image source={heartIcon} style={combineStyles} />
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app?</Text>
      </View>
    );
  }
}

export default Toggle;
