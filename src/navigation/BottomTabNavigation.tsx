import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';

import {colors, isSmallDevice} from '../theme';
import {TabBarIcon, TabBarLabel} from '../components';
import {
  HomeFilled,
  HomeOutlined,
  TagFilled,
  TagOutlined,
} from '../assets/icons';
import {Home, Tags} from '../screens';

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
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              filledICon={HomeFilled}
              outlinedIcon={HomeOutlined}
            />
          ),
          tabBarLabel: props => <TabBarLabel label="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              filledICon={TagFilled}
              outlinedIcon={TagOutlined}
            />
          ),
          tabBarLabel: props => <TabBarLabel label="Tags" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
