import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const { func, object } = PropTypes;

class ContactItem extends PureComponent {
  static propTypes = {
    contact: object,
    onPress: func,
    onRemove: func,
    onDragStart: func,
    onDragEnd: func
  };

  static defaultProps = {
    onPress: emptyFn,
    onRemove: emptyFn,
    onDragStart: emptyFn,
    onDragEnd: emptyFn
  };

  state = {
    pan: new Animated.ValueXY()
  };

  onShouldDrag(e, gesture) {
    const { dx } = gesture;
    return Math.abs(dx) > 2;
  }

  onReleaseItem(e, gesture) {
    const { onRemove, contact, onDragEnd } = this.props;
    // to be continued
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.onShouldDrag,
      onPanResponderMove: Animate.event([
        null /* Raw event arg ignored */,
        { dx: this.state.pan.x }
      ]),
      onPanResponderRelease: this.onReleaseItem,
      onPanResponderTerminate: this.onReleaseItem
    });
  }
}

function emptyFn() {}
