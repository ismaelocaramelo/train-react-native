import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const { func, number, string } = PropTypes;

const icons = {
  angry: require('./images/angry.png'),
  heart: require('./images/heart.png'),
  laughing: require('./images/laughing.png'),
  like: require('./images/like.png'),
  surprised: require('./images/surprised.png')
};

class Icon extends PureComponent {
  static propTypes = {
    delay: number,
    index: number,
    name: string,
    onPress: func
  };

  static defaultProps = {
    delay: 0,
    onPress: emptyFn
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { delay } = this.props;

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.elastic(1),
      delay
    }).start();
  }

  render() {
    const { name, index } = this.props;
    const left = index * 50;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -95]
    });
    const opacity = this.animatedValue;

    return (
      <Animated.View style={[styles.icon, { top, left, opacity }]}>
        <TouchableOpacity onPress={this.onPressIcon}>
          <Image source={icons[name]} style={styles.image} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute'
  },
  image: {
    width: 40,
    height: 40
  }
});

export default Icon;

function emptyFn() {}
