import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface IProps {
  source: ImageSourcePropType;
}

const Avatar: React.FC<IProps> = ({source}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={source} />
    </View>
  );
};

export default Avatar;
