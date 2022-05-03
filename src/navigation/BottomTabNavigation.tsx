import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, isSmallDevice} from '../theme';
import {Platform} from 'react-native';
import {TabBarLabel} from '../components';
import {Home} from '../screens';
const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 75 : isSmallDevice ? 44 : 58,
          backgroundColor: colors.white,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: props => <TabBarLabel label="Home" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
