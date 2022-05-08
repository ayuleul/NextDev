import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface IProps {
  data: ITag;
}

const Tag: React.FC<IProps> = ({data}) => {
  const {name, bg_color_hex} = data;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderLeftColor: bg_color_hex, borderRightColor: bg_color_hex},
      ]}>
      <Text style={styles.tagName}>#{name}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
