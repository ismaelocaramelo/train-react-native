import React, { PureComponent } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import Orientation from 'react-native-orientation';

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
    return <Text>{this.state.orientation}</Text>;
  }
}

export default MainAppDeviceOrientation;
