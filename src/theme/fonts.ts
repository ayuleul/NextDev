import {metrics} from './metrics';

const sizes = {
  fontH1: metrics.screenWidth * 0.08,
  fontH2: metrics.screenWidth * 0.07,
  fontH3: metrics.screenWidth * 0.06,
  fontH4: metrics.screenWidth * 0.05,
  fontBase: metrics.screenWidth * 0.04,
  fontSmall: metrics.screenWidth * 0.03,
};

const weight = {
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

export {sizes, weight, fontFamily};
