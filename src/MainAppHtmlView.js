import React, { PureComponent } from 'react';
import { Alert, StyleSheet, ScrollView, View, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import html from './html.json';

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10
  },
  title: {
    backgroundColor: '#c0392b',
    color: '#fff',
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  p: {
    color: '#333',
    fontSize: 16
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  a: {
    color: '#c0392b',
    fontWeight: 'normal'
  }
});

class MainAppHtmlView extends PureComponent {
  onLinkPress(url) {
    Alert.alert('Link press', `URL: ${url}`);
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>{html.title}</Text>
        <ScrollView style={styles.content}>
          <HTMLView
            value={html.content}
            stylesheet={styles}
            onLinkPress={this.onLinkPress}
          />
        </ScrollView>
      </View>
    );
  }
}

export default MainAppHtmlView;
