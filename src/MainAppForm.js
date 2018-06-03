import React from 'react';
import { StyleSheet, ScroolView, View, Text } from 'react-native';

import UserForm from './UserForm';

const MainAppForm = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.toolbar}>Fitness App</Text>
      <ScroolView style={styles.content}>
        <UserForm />
      </ScroolView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  toolbar: {
    backgroundColor: '#1abc9c',
    padding: 20,
    color: '#fff',
    fontSize: 20
  },
  content: {
    padding: 10
  }
});

export default MainAppForm;
