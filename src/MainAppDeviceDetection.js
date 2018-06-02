import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dimensions from './utils/Dimensions';
import userData from './contacts.json';

import UserList from './UserList';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});

class MainAppDeviceDetection extends PureComponent {
  renderMaster() {
    return <UserList contacts={userData.results} />;
  }

  renderDetail() {
    if (Dimensions.isTablet()) {
      return <Text>Render on tables only!!!</Text>;
    }
  }

  render() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

export default MainAppDeviceDetection;
