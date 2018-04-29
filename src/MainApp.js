import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#BADA55',
    borderRadius: 5
  },
  innerContainer: {
    backgroundColor: '#60061E',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#D1E5E1',
    backgroundColor: 'transparent',
    top: 12,
    left: 10
  },
  subtitle: {
    fontWeight: 'bold'
  }
});

const MainApp = () => {
  const name = '01 - Hey, this is my life';
  return (
    <View sytle={styles.container}>
      <View style={styles.innerContainer} />
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing:</Text> {name}
      </Text>
    </View>
  );
};

export default MainApp;
