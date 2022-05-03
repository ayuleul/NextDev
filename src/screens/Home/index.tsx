import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Container} from '../../theme';

const Home = () => {
  return (
    <View style={Container}>
      <Text style={styles.logo}>Home</Text>
    </View>
  );
};

export default Home;
