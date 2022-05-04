import {StyleSheet} from 'react-native';
import {colors, fontSizes, spacing, weight} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.medium,
    borderRadius: 20,
    marginBottom: spacing.medium,
  },
  header: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingBottom: spacing.small,
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
  authorName: {
    fontSize: fontSizes.fontH3,
    color: colors.black,
    paddingLeft: spacing.small,
    fontWeight: weight.bold,
  },
  date: {
    fontSize: fontSizes.fontBase,
    color: colors.black,
  },
});
