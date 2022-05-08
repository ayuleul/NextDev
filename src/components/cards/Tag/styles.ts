import {StyleSheet} from 'react-native';
import {colors, fontSizes, sizes, spacing, weight} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizes.xSmall,
    backgroundColor: colors.white,
    borderRadius: spacing.large,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    elevation: 4,
    borderLeftWidth: spacing.medium,
    borderRightWidth: spacing.medium,
    borderLeftColor: 'yellow',
    borderRightColor: 'yellow',
    marginBottom: spacing.medium,
  },
  tagName: {
    fontSize: fontSizes.fontH3,
    color: colors.black,
    fontWeight: weight.bold,
  },
});
