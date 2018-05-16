import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Home from './Home';
import Detail from './Detail';

class MainAppNav extends PureComponent {
  renderScene(route, navigator) {
    if (route.song) {
      return <Detail song={route.song} navigator={navigator} />;
    }

    return <Home navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={route => Navigator.SceneConfigs.FloatFromBottom}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainAppNav;
