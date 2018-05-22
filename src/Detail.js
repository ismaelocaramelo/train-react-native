import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text } from 'react-native';

const { object } = PropTypes;
const root = 'https://s3.amazonaws.com/crysfel/public/book/01/07';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c1b1a',
    flex: 1
  },
  info: {
    padding: 50,
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  title: {
    fontSize: 20,
    fontWeight: '200',
    color: '#fff',
    marginTop: 23
  },
  playContainer: {
    backgroundColor: '#37b298',
    padding: 10,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 10,
    marginTop: 20
  },
  play: {
    color: '#fff'
  },
  other: {
    color: '#f1f1f1',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#081412',
    marginBottom: 1
  }
});
class Detail extends PureComponent {
  static propTypes = {
    song: object,
    navigator: object
  };

  render() {
    const { song } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image
            source={{ uri: `${root}/${song.image}` }}
            style={styles.image}
          />
          <Text style={styles.title}>{song.title}</Text>
          <View style={styles.playContainer}>
            <Text style={styles.play}>Play Song</Text>
          </View>
        </View>
        <Text style={styles.other}>O1 - One more song</Text>
        <Text style={styles.other}>O1 - Another song here</Text>
        <Text style={styles.other}>03 - This is the last song</Text>
        <Text style={styles.other}>04 - Maybe this is the last song?</Text>
        <Text style={styles.other}>05 - Why not one more song?</Text>
        <Text style={styles.other}>06 - Finally this is the last song</Text>
      </View>
    );
  }
}

export default Detail;
