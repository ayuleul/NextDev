import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    fontWeight: 'normal',
    opacity: 0.5,
    color: colors.primary,
    textAlign: 'center',
    bottom: 4,
  },
  focused: {
    fontWeight: 'bold',
    opacity: 1,
  },
});
