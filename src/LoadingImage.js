import React from 'react';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    backgroundColor: '#202020',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    paddingTop: 16,
    bottom: 30,
    right: 10,
    left: 10,
    borderWidth: 1,
    borderColor: '#303030',
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 10,
    marginTop: 2,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    width: 80,
  },
});

const playIcon = require('./images/play.png');
const volumenIcon = require('./images/sound.png');
const hdIcon = require('./images/hd-sign.png');
const fullScreenIcon = require('./images/full-screen.png');

const remoteImage = {
  uri: 'https://i.imgur.com/aZEKKfJ.jpg',
};

const LoadingImage = () => {
  return (
    <ImageBackground source={remoteImage} style={styles.fullscreen}>
      <View style={styles.container}>
        <Image source={playIcon} style={styles.icon} />
        <Image source={volumenIcon} style={styles.icon} />
        <View style={styles.progress}>
          <View style={styles.progressBar} />
        </View>
        <Image source={hdIcon} style={styles.icon} />
        <Image source={fullScreenIcon} style={styles.icon} />
      </View>
    </ImageBackground>
  );
};

export default LoadingImage;
