import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';

interface IProps {
  focused: boolean;
  filledICon: ImageSourcePropType;
  outlinedIcon: ImageSourcePropType;
}

export const TabBarIcon: React.FC<IProps> = ({
  filledICon,
  outlinedIcon,
  focused,
}) => {
  return (
    <Image source={focused ? filledICon : outlinedIcon} style={styles.image} />
  );
};
