import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const metrics = {
  screenWidth: width,
  screenHeight: height,
};

export const isSmallDevice = Dimensions.get('window').width < 360;
