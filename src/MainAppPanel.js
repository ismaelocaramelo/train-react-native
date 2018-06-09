import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Panel from './Panel';

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>Animated containers</Text>
    <View style={styles.content}>
      <Panel style={styles.panel}>
        <Text>Lorem ipsum dolor sit amet</Text>
      </Panel>
      <Panel style={styles.panel}>
        <Text>Doius sit amet</Text>
      </Panel>
      <Panel expanded style={styles.panel}>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Text>Lorem ipsum ...</Text>
      </Panel>
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: 20,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1'
  },
  panel: {
    marginBottom: 10
  }
});

export default MainApp;
