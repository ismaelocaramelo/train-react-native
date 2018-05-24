import React from 'react';
import Prototypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Post = ({ content, img, title }) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={{
          uri: `https://s3.amazonaws.com/crysfel/public/book/02/01/${img}`
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{content}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const { string } = Prototypes;

Post.protoTypes = {
  content: string,
  img: string,
  title: string
};

export default Post;
