import {TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './styles';

interface IProps {
  children: ReactNode;
  onPress: () => void;
}

const Icon: React.FC<IProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default Icon;
