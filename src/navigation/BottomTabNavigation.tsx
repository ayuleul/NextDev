import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors, sizes} from '../theme';
import {TabBarIcon} from '../components';
import {
  HomeFilled,
  HomeOutlined,
  SavedFilled,
  SavedOutlined,
  TagFilled,
  TagOutlined,
} from '../assets/icons';
import {Home, Saved, Tags} from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: sizes.xSmall,
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
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              filledICon={SavedFilled}
              outlinedIcon={SavedOutlined}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
