import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { any, bool, func, string } = PropTypes;

class Button extends PureComponent {
  static propTypes = {
    label: string,
    onPress: func,
    style: any,
    loading: bool
  };

  static defaultProps = {
    loading: false,
    onPress: emptyFn
  };

  renderLabel() {
    const { label, loading } = this.props;
    if (!loading) {
      return <Text style={styles.label}>{label}</Text>;
    }
  }

  renderActityIndicator() {
    if (this.props.loading) {
      return <ActivityIndicator size="small" color="#fff" />;
    }
  }

  onPressButton = () => {
    const { loading, onPress } = this.props;
    LayoutAnimation.easeInEaseOut();
    onPress(!loading);
  };

  render() {
    const { loading, style } = this.props;

    return (
      <TouchableOpacity
        style={[styles.main, style, loading ? styles.loading : null]}
        activeOpacity={0.6}
        onPress={this.onPressButton}
      >
        <View>
          {this.renderLabel()}
          {this.renderActityIndicator()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e67e22',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  loading: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

function emptyFn() {}

export default Button;
