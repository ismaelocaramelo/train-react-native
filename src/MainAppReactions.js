import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import Reactions from './Reactions';

const image1 = require('./images/01.png');
const image2 = require('./images/02.jpg');
const { width } = Dimensions.get('window');

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>Reactions</Text>
    <ScrollView style={styles.content}>
      <Image source={image1} style={styles.image} />
      <Reactions />
      <Image source={image2} style={styles.image} />
      <Reactions />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    flex: 1
  },
  image: {
    width,
    height: 300
  }
});

export default MainApp;
