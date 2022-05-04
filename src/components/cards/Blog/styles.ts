import {StyleSheet} from 'react-native';
import {colors, fontSizes, sizes, spacing, weight} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.medium,
    borderRadius: 20,
  },
  blogImage: {
    width: '100%',
    height: sizes.medium,
    borderRadius: 10,
  },
  blogTitle: {
    fontSize: fontSizes.fontH4,
    color: colors.black,
    paddingTop: spacing.small,
    fontWeight: weight.bold,
  },
  highlight: {
    fontSize: fontSizes.fontSmall,
  },
});
