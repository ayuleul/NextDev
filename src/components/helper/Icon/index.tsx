import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './styles';

interface IProps {
  children: ReactNode;
}

const Icon: React.FC<IProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Icon;
