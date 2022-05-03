import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
