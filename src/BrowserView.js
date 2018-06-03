import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  WebView,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#e74c3c',
    padding: 20
  },
  text: {
    color: '#fff'
  },
  content: {
    flex: 1
  }
});

class BrowserView extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    navigation: PropTypes.object
  };
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toolbar}
          onPress={() => this.props.navigation.goBack()}
        />
        <WebView
          source={{
            uri: this.props.navigation.getParam('url', 'www.google.com')
          }}
          style={styles.content}
        />
      </View>
    );
  }
}

export default BrowserView;
