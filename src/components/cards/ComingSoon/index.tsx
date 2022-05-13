import {View, Text} from 'react-native';
import React from 'react';
import {Container, FlexCenter} from '../../../theme';
import {styles} from './styles';

const ComingSoon = () => {
  return (
    <View style={[Container, FlexCenter]}>
      <Text style={styles.comingSoonText}>Coming Soon</Text>
    </View>
  );
};

export default ComingSoon;
