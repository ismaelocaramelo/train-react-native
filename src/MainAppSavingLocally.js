import React, {PureComponent} from 'react';
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const key = '@MyApp:key';

class MainApp extends PureComponent {
  state = {
    text: '',
    storeValue: '',
  };

  onLoad = async () => {
    try {
      const storeValue = await AsyncStorage.getItem(key);
      this.setState({storeValue});
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error while loading the data',
      );
    }
  };

  onSave = async () => {
    const {text} = this.state;

    try {
      await AsyncStorage.setItem(key, text);
      Alert.alert('Saved', 'Successfully saved on device');
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error while saving the data',
      );
    }
  };

  componentWillMount() {
    this.onLoad();
  }

  onChange = text => {
    this.setState({text});
  };

  render() {
    const {storeValue, text} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.preview}>{storeValue}</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.onChange}
            value={text}
            placeholder="Type something here..."
          />
          <TouchableOpacity onPress={this.onSave} style={styles.btn}>
            <Text>Save Locally</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onLoad} style={styles.btn}>
            <Text>Load Locally</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 80,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    width: 300,
    height: 40,
    padding: 5,
  },
  btn: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
  },
});

export default MainApp;
