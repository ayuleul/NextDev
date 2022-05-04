import {
  StatusBar,
  StatusBarStyle,
  StatusBarProps,
  View,
  Text,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {colors} from '../../../theme';
import {styles} from './styles';

interface IProps {
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
  statusBarProps?: StatusBarProps;
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  title?: string;
  elevated?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<IProps> = ({
  barStyle = 'dark-content',
  backgroundColor = colors.background,
  statusBarProps,
  leftComponent,
  centerComponent,
  rightComponent,
  title,
  elevated,
  containerStyle,
}) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={backgroundColor}
        {...statusBarProps}
      />
      <View
        style={[
          styles.container,
          elevated && styles.elevatedHeader,
          containerStyle,
        ]}>
        <View>{leftComponent && leftComponent}</View>
        {centerComponent ? (
          centerComponent
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        <View>{rightComponent && rightComponent}</View>
      </View>
    </>
  );
};

export default Header;
