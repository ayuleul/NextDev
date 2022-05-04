import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Container, Padding20} from '../../theme';
import {Blog} from '../../components';

const Home = () => {
  return (
    <View style={[Container, Padding20]}>
      <Text style={styles.logo}>Next Dev</Text>
      <Blog />
    </View>
  );
};

export default Home;
