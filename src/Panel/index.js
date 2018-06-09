import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const { any, bool, func, string } = PropTypes;

class Panel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.expanded ? null : 0
    };
  }
  static propTypes = {
    children: any,
    title: string,
    expanded: bool,
    onCollapse: func,
    onExpand: func,
    style: any
  };

  static defaultProps = {
    expanded: false,
    onCollapse: emptyFn,
    onExpand: emptyFn
  };

  onToggle = () => {
    LayoutAnimation.spring();
    this.setState(({ height }) => ({ height: height === null ? 0 : null }));
  };

  render() {
    const { children, style, title } = this.props;
    const { height } = this.state;

    return (
      <View style={[styles.main, style]}>
        <TouchableOpacity onPress={this.onToggle}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={{ height }}>{children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bold',
    padding: 15
  }
});

export default Panel;

function emptyFn() {}
