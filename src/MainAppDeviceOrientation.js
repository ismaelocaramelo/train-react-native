import React, { PureComponent } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import Orientation from 'react-native-orientation';

import Menu from './Menu';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class MainAppDeviceOrientation extends PureComponent {
  state = {
    orientation: null
  };

  onOrientationChange = orientation => {
    return this.setState(() => {
      return { orientation };
    });
  };

  componentWillMount() {
    const orientation = Orientation.getInitialOrientation();
    return this.setState(() => {
      return { orientation };
    });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.onOrientationChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.onOrientationChange);
  }

  render() {
    return (
      <View style={styles.content}>
        <Menu orientation={this.state.orientation} />
        <View style={styles.main}>
          <Text>Main Content</Text>
        </View>
      </View>
    );
  }
}

export default MainAppDeviceOrientation;
