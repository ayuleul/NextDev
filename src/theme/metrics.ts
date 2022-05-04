import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const isSmallDevice = Dimensions.get('window').width < 360;
export const isLargeDevice = Dimensions.get('window').width > 780;

export const metrics = {
  screenWidth: width,
  screenHeight: height,
  ratio: width / height,
  base: isLargeDevice ? width - 300 : width,
};
