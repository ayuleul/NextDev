import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, isSmallDevice} from '../theme';
import {Platform} from 'react-native';
import {TabBarIcon, TabBarLabel} from '../components';
import {Home} from '../screens';
import {HomeFilled, HomeOutlined} from '../assets/icons';
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
    </Tab.Navigator>
  );
};
