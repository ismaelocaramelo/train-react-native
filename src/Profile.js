import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';

const profileImage = require('./images/user-profile.jpg');
const friendsIcon = require('./images/profile.png');
const favIcon = require('./images/plain-heart.png');
const msgIcon = require('./images/chat.png');

class Profile extends PureComponent {
  state = {
    name: 'Ismy',
    lastName: ' Bakkali Chairi',
    occupation: 'Software Engineer',
    friends: '1,200',
    favorites: '2,491',
    comments: '4,832'
  };

  renderStat(options) {
    return (
      <View style={styles.stat}>
        <Image
          source={options.icon}
          style={[styles.icon, options.selected ? styles.selected : null]}
        />
        <Text style={styles.counter}>{options.value}</Text>
      </View>
    );
  }

  render() {
    const {
      name,
      lastName,
      occupation,
      friends,
      favorites,
      comments
    } = this.state;
    return (
      <ImageBackground source={profileImage} style={styles.container}>
        <View style={styles.info}>
          <View style={styles.personal}>
            <Text style={styles.name}>
              {name}
              {lastName}
            </Text>
            <Text style={styles.occupation}>{occupation.toUpperCase()}</Text>
          </View>
          <View style={styles.statistics}>
            {this.renderStat({
              icon: friendsIcon,
              value: friends,
              seleted: true
            })}
            {this.renderStat({ icon: favIcon, value: favorites })}
            {this.renderStat({ icon: msgIcon, value: comments })}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null
  },
  info: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    ...StyleSheet.absoluteFillObject,
    top: null
  },
  personal: {
    padding: 30
  },
  name: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold'
  },
  occupation: {
    color: '#d6ec1b',
    marginTop: 5
  },
  statistics: {
    flexDirection: 'row'
  },
  stat: {
    alignItems: 'center',
    backgroundColor: '#7675b7',
    borderColor: '#6e6db1',
    borderLeftWidth: 1,
    flex: 1,
    padding: 10
  },
  selected: {
    tintColor: '#d6ec1b'
  },
  icon: {
    tintColor: '#504f9f',
    height: 30,
    width: 30
  },
  counter: {
    color: '#fff',
    fontSize: 15,
    marginTop: 5
  }
});

export default Profile;
