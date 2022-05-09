import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface IProps {
  source: ImageSourcePropType;
  size?: 'xxSmall' | 'xSmall' | 'small';
}

const Avatar: React.FC<IProps> = ({source, size = 'xxSmall'}) => {
  return (
    <View
      style={[
        size === 'xxSmall' && styles.container,
        size === 'xSmall' && styles.xSmallContainer,
        size === 'small' && styles.smallContainer,
      ]}>
      <Image style={styles.imageContainer} source={source} />
    </View>
  );
};

export default Avatar;
