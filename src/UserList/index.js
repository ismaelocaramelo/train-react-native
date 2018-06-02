import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

class UserList extends PureComponent {
  static capitalize(value) {
    return value[0].toUpperCase() + value.substring(1);
  }

  renderContact({ item }) {
    return (
      <TouchableOpacity style={styles.row}>
        <Image source={{ uri: `${item.picture.large}` }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {UserList.capitalize(item.name.first)}
            {UserList.capitalize(item.name.last)}
          </Text>
          <Text style={styles.contact}>{item.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>My contacts!</Text>
        <FlatList
          data={this.props.contacts}
          style={styles.main}
          renderItem={this.renderContact}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

export default UserList;
