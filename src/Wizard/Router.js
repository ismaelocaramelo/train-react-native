import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createStackNavigator} from 'react-navigation';

const {func, string} = PropTypes;

class Router extends PureComponent {
  static propTypes = {
    handleNavChange: func.isRequired,
    handleNavRef: func.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        component: func.isRequired,
        routeName: string.isRequired,
      }),
    ).isRequired,
    title: string.isRequired,
  };

  componentWillMount() {
    this.Navigator = this.generateNavigator();
  }

  generateNavigator = () => {
    const {steps, title} = this.props;
    const navigationRoutes = {};
    steps.forEach((step, index) => {
      const routeOptions = {screen: step.component};
      navigationRoutes[step.routeName] = routeOptions;
    });

    const navigationOptions = {
      headerStyle: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 5,
      },
      headerTintColor: '#111111',
      headerTitle: title,
    };
    return createStackNavigator(navigationRoutes, {
      navigationOptions,
    });
  };

  handleRef = navigator => {
    this.props.handleNavRef(navigator);
  };

  handleNavigationChange = (prevState, currentState, action) => {
    const {isTransitioning, routes} = currentState;
    if (isTransitioning) {
      const {routeName} = routes.slice(-1)[0];
      this.props.handleNavChange(routeName);
    }
  };

  render() {
    const {Navigator} = this;
    return (
      <Navigator
        onNavigationStateChange={this.handleNavigationChange}
        ref={this.handleRef}
      />
    );
  }
}

export default Router;
