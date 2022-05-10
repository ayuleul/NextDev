import {StyleSheet} from 'react-native';
import {colors, fontSizes, sizes, spacing, weight} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    position: 'relative',
  },
  viewContainer: {
    color: colors.black,
  },
  topIcon: {
    width: sizes.xxxSmall,
    height: sizes.xxxSmall,
  },
  header: {
    marginTop: spacing.medium,
  },
  title: {
    fontSize: fontSizes.fontH2,
    color: colors.black,
    fontWeight: weight.bold,
  },
  coverImage: {
    width: '100%',
    height: sizes.large,
    marginVertical: spacing.medium,
    borderRadius: spacing.medium,
  },
  authorName: {
    fontSize: fontSizes.fontBase,
    color: colors.black,
    paddingLeft: spacing.small,
    width: '65%',
  },
  readingTime: {
    fontSize: fontSizes.fontSmall,
    color: colors.black,
  },
});
