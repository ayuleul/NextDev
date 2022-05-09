import {StyleSheet} from 'react-native';
import {sizes} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: sizes.xxSmall,
    height: sizes.xxSmall,
    borderRadius: sizes.xxSmall / 2,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: sizes.small / 2,
  },
  xSmallContainer: {
    width: sizes.xSmall,
    height: sizes.xSmall,
    borderRadius: sizes.xSmall / 2,
  },
  smallContainer: {
    width: sizes.small,
    height: sizes.small,
    borderRadius: sizes.small / 2,
  },
});
