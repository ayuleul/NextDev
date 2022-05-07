import {StyleSheet} from 'react-native';
import {colors, fontSizes, sizes, weight} from '../../theme';

export const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    fontSize: fontSizes.fontH2,
    fontWeight: weight.bold,
    color: colors.primary,
  },
  topMenu: {
    width: sizes.xxxSmall,
    height: sizes.xxxSmall,
  },
});
