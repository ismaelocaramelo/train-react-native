import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const { string } = PropTypes;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#34495e',
    paddingTop: 50
  },
  option: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  landscape: {
    paddingRight: 30,
    paddingLeft: 30
  },
  title: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    marginLeft: 20
  }
});

class Menu extends PureComponent {
  static propTypes = {
    orientation: string
  };

  renderOption = (option, index) => {
    const isLandscape = this.props.orientation === 'LANDSCAPE';
    const title = isLandscape ? (
      <Text style={styles.title}>{option.title}</Text>
    ) : null;
    const iconSize = isLandscape ? 27 : 35;
    return (
      <View key={index} style={[styles.option, styles.landscape]}>
        <Icon name={option.icon} size={iconSize} color="#fff" />
        {title}
      </View>
    );
  };

  state = {
    options: [
      { title: 'Dashboard', icon: 'graph-pie' },
      { title: 'Activities', icon: 'calendar' },
      { title: 'Contacts', icon: 'address-book' },
      { title: 'Tasks', icon: 'list-thumbnails' },
      { title: 'Inbox', icon: 'archive' }
    ]
  };

  render() {
    return (
      <View style={styles.content}>
        {this.state.options.map(this.renderOption)}
      </View>
    );
  }
}

export default Menu;
