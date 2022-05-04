import {StyleSheet} from 'react-native';
import {colors, fontSizes, spacing, weight} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.small,
  },
  title: {
    textAlign: 'center',
    fontSize: fontSizes.fontH2,
    fontWeight: weight.bold,
    color: colors.primary,
  },
  elevatedHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8.0,
    elevation: 24,
  },
});
