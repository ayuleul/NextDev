import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface IProps {
  label: string;
  focused: boolean;
}

export const TabBarLabel: React.FC<IProps> = ({focused, label}) => (
  <Text style={[styles.container, focused && styles.focused]}>{label}</Text>
);
