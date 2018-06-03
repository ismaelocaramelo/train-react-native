import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BrowserView from './BrowserView';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});

class MainAppBrowser extends PureComponent {
  state = {
    links: [
      { title: 'My Blog', url: 'https://medium.com/@ismael.bakkali' },
      { title: 'Google', url: 'https://www.google.com/' },
      { title: 'Yahoo', url: 'https://www.yahoo.com/' },
      { title: 'Facebook', url: 'https://facebook.com/' }
    ]
  };

  renderButton = (btn, index) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigate('Browser', { url: btn.url })}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.content}>
        <Text>Home</Text>
        <View>{this.state.links.map(this.renderButton)}</View>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Home: {
      screen: MainAppBrowser
    },
    Browser: {
      screen: BrowserView
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
