import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Post from './Post';
import data from './data.json';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#34495e',
    padding: 10,
    paddingTop: 20
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  list: {
    backgroundColor: '#f0f3f4',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

class MainAppPost extends PureComponent {
  state = {
    dataSource: data.posts
  };

  renderListPost({ item }) {
    return <Post style={styles.list} {...item} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest posts</Text>
        </View>
        <FlatList
          styles={styles.content}
          data={this.state.dataSource}
          renderItem={this.renderListPost}
          keyExtractor={item => item.author}
        />
      </View>
    );
  }
}

export default MainAppPost;
