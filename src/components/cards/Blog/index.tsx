import {Image, Text, View} from 'react-native';
import React from 'react';
import {blog} from '../../../assets/images';
import {styles} from './styles';

const Blog = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.blogImage} source={blog} />
      <Text style={styles.blogTitle}>
        The best way to predict the future is to create it.
      </Text>
      <Text style={styles.highlight}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        facilis quas modi mollitia voluptate aspernatur, ab reiciendis nemo
        officiis repellendus velit aut iure veritatis nulla accusantium numquam
        natus dignissimos pariatur!
      </Text>
    </View>
  );
};

export default Blog;
