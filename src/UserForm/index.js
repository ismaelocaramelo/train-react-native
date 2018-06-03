import React, { PureComponent } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class UserForm extends PureComponent {
  state = {};

  renderTextField(options) {
    return (
      <TextInput
        style={styles.textfield}
        onChangeText={value => this.setState({ [options.name]: value })}
        placeholder={options.label}
        value={this.state[options.name]}
        keyboardType={options.keyboard || 'default'}
      />
    );
  }

  renderButton() {
    return (
      <TouchableOpacity onPress={this.onPressButton} style={styles.btn}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    );
  }

  onPressButton = () => {
    const { name, phone, email } = this.state;

    Alert.alert(
      "User's data",
      `Name: ${name}, Phone: ${phone}, Email: ${email}`
    );
  };

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.instructions}>
          Please enter your contact information
        </Text>
        {this.renderTextField({ name: 'name', label: 'Your name' })}
        {this.renderTextField({
          name: 'phone',
          label: 'Your phone number',
          keyboard: 'phone-pad'
        })}
        {this.renderTextField({
          name: 'email',
          label: 'Your email',
          keyboard: 'email-address'
        })}
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    marginBottom: 20
  },
  instructions: {
    color: '#bbb',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10
  },
  textfield: {
    height: 40,
    marginBottom: 10
  },
  btn: {
    backgroundColor: '#34495e',
    borderRadius: 3,
    padding: 12,
    flex: 1
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  }
});
export default UserForm;
