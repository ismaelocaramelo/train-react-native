import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from './icon';

const image = require('./images/like.png');
const { array, any } = PropTypes;

class Reactions extends PureComponent {
  static propTypes = {
    icons: array,
    style: any
  };

  static defaultProps = {
    icons: ['like', 'heart', 'angry', 'laughing', 'surprised']
  };

  state = {
    show: false,
    selected: ''
  };

  toggleReactions = () => {
    this.setState(
      ({ show }) => ({ show: !show }),
      () => console.log('state changed', this.state)
    );
  };

  onSelectReaction = reaction => {
    this.setState({ selected: reaction });
    this.toggleReactions();
  };

  renderReactions() {
    const { icons } = this.props;
    if (this.state.show) {
      return (
        <View style={styles.reactions}>
          {icons.map((name, index) => (
            <Icon
              key={index}
              name={name}
              delay={index * 100}
              index={index}
              onPress={this.onSelectReaction}
            />
          ))}
        </View>
      );
    }
  }

  render() {
    const { style } = this.props;
    const { selected } = this.state;

    return (
      <View style={[style, styles.container]}>
        <TouchableOpacity onPress={this.toggleReactions}>
          <Image source={image} style={styles.icon} />
        </TouchableOpacity>
        <Text>{selected}</Text>
        {this.renderReactions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  reactions: {
    flexDirection: 'row',
    height: 0
  }
});

export default Reactions;
