import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from './Button';

function onPressBtn() {
  Alert.alert('Alert', 'You clicked this button!');
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    margin: 10
  }
});

const MainAppButton = () => (
  <View style={styles.container}>
    <Button style={styles.btn}> My first button</Button>
    <Button success style={styles.btn}>
      Success button
    </Button>
    <Button info style={styles.btn}>
      Info Button
    </Button>
    <Button danger rounded onPress={onPressBtn} style={styles.btn}>
      Rounded button
    </Button>
  </View>
);

export default MainAppButton;
