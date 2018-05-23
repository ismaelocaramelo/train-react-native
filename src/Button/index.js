import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import Base, { Default, Danger, Info, Success } from './styles';

const { array, string, object, bool, func, any } = PropTypes;

class Button extends PureComponent {
  static propTypes = {
    children: any,
    danger: bool,
    info: bool,
    success: bool,
    onPress: func
  };

  getTheme() {
    const { danger, info, success } = this.props;

    if (info) {
      return Info;
    }
    if (danger) {
      return Danger;
    }
    if (success) {
      return Success;
    }

    return Default;
  }

  render() {
    const theme = this.getTheme();
    const { children, onPress, style, rounded } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.2}
        style={[Base.main, theme.main, rounded ? Base.rounded : null, style]}
        onPress={onPress}
      >
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
