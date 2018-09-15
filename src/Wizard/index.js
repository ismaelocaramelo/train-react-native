import React, {Component} from 'react';
import {Alert, View, Text} from 'react-native';

import Wizard from './Wizard';

const step1 = () => {
  return (
    <View>
      <Text>Step 1</Text>
    </View>
  );
};
const step2 = () => {
  return (
    <View>
      <Text>Step 2</Text>
    </View>
  );
};

const step3 = () => {
  return (
    <View>
      <Text>Step 3</Text>
    </View>
  );
};

export default class App extends Component {
  handleSubmitWizard = () => {
    Alert.alert('Wizard has been submitted');
  };

  render() {
    const steps = [
      {component: step1, routeName: 'Step1'},
      {component: step2, routeName: 'Step2'},
      {component: step3, routeName: 'Step3'},
    ];
    return (
      <Wizard
        handleSubmitWizard={this.handleSubmitWizard}
        steps={steps}
        title="Basic Wizard Example"
      />
    );
  }
}
