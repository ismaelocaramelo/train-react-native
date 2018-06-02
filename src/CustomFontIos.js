import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomFontIos = () => (
  <View style={styles.container}>
    <Text style={styles.base}>Welcome To React Native!</Text>
    <Text style={[styles.base, styles.bold]}>Welcome To React Native!</Text>
    <Text style={[styles.base, styles.kids]}>Welcome To React Native!</Text>
    <Text style={[styles.base, styles.oneSC]}>Welcome To React Native!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c'
  },
  base: {
    color: '#fff',
    fontFamily: 'Roboto Condensed',
    fontSize: 25,
    textAlign: 'center',
    margin: 5
  },
  oneSC: {
    fontFamily: 'Bowlby One SC'
  },
  kids: {
    fontFamily: 'Butterfly Kids'
  },
  bold: {
    fontWeight: 'normal'
  }
});

export default CustomFontIos;
