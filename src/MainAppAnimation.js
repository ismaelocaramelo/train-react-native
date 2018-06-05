import React, { PureComponent } from 'react';
import { Animated, Easing, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window' || 'screen');
const image = require('./images/cloudy.png');
const imageWidth = 80;

class MainApp extends PureComponent {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.animatedValue.setValue(width);
    Animated.timing(this.animatedValue, {
      toValue: -imageWidth,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.startAnimation());
  }

  render() {
    return (
      <Animated.Image
        source={image}
        style={[styles.image, { left: this.animatedValue }]}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: imageWidth,
    width: imageWidth,
    position: 'absolute',
    top: height / 3
  }
});

export default MainApp;
