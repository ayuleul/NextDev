import {metrics} from './metrics';
import {colors} from './colors';

export const Container = {
  flex: 1,
  backgroundColor: colors.background,
};

export const FlexRow = {
  flexDirection: 'row',
};

export const FlexColumn = {
  flexDirection: 'column',
};

export const FlexCenter = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const JustifyCenter = {
  justifyContent: 'center',
};

export const AlignCenter = {
  alignItems: 'center',
};

export const JustifyBetween = {
  justifyContent: 'space-between',
};

export const Padding20 = {
  padding: metrics.screenWidth * 0.04,
};
