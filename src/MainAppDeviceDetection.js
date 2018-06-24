import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Dimensions from './utils/Dimensions';
import userData from './contacts.json';

import UserList from './UserList';
import UserDetail from './UserDetail';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

class MainAppDeviceDetection extends PureComponent {
  renderMaster() {
    return <UserList contacts={userData.results} />;
  }

  renderDetail() {
    if (Dimensions.isTablet()) {
      return <UserDetail contact={userData.results[0]} />;
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
