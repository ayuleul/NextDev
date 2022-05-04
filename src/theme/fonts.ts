import {metrics} from './metrics';

type fontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IFontWeight {
  bold: fontWeightType;
  semiBold: fontWeightType;
  normal: fontWeightType;
  medium: fontWeightType;
  light: fontWeightType;
}

const fontSizes = {
  fontH1: metrics.base * 0.08,
  fontH2: metrics.base * 0.06,
  fontH3: metrics.base * 0.05,
  fontH4: metrics.base * 0.045,
  fontBase: metrics.base * 0.04,
  fontSmall: metrics.base * 0.035,
};

const sizes = {
  medium: metrics.base * 0.4,
  small: metrics.base * 0.2,
  xSmall: metrics.base * 0.12,
};

const spacing = {
  small: metrics.base * 0.02,
  medium: metrics.base * 0.04,
  large: metrics.base * 0.06,
};

const weight: IFontWeight = {
  bold: 'bold',
  semiBold: '700',
  medium: '500',
  normal: 'normal',
  light: '300',
};

const fontFamily = {
  regular: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  medium: 'OpenSans-Medium',
  light: 'OpenSans-Light',
};

export {fontSizes, sizes, spacing, weight, fontFamily};
