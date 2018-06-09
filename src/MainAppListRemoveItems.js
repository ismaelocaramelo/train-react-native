import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ContactList from './ContacList';

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>Contacts</Text>
    <ContactList style={styles.content} />
  </View>
);


const styles = StyleSheet.create({
  main: {
    flex: 1
  }
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    padding: 10
  }
})


export default MainApp