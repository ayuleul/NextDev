import {metrics} from './metrics';
import {colors} from './colors';
import {ViewStyle} from 'react-native';

export const Container = {
  flex: 1,
  backgroundColor: colors.background,
} as ViewStyle;

export const FlexRow = {
  flexDirection: 'row',
} as ViewStyle;

export const FlexColumn = {
  flexDirection: 'column',
} as ViewStyle;

export const FlexCenter = {
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle;

export const JustifyCenter = {
  justifyContent: 'center',
} as ViewStyle;

export const AlignCenter = {
  alignItems: 'center',
} as ViewStyle;

export const JustifyBetween = {
  justifyContent: 'space-between',
} as ViewStyle;

export const Padding20 = {
  padding: metrics.screenWidth * 0.04,
} as ViewStyle;
