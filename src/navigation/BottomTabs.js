import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppStack from './AppStack';
import Product from '../screens/Product';
import Home from '../screens/Home';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {FONT_FAMILY} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import Address from '../screens/address/Address';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 55,
          elevation: 2,
          borderTopWidth: 0.5,
          borderColor: COLORS.outline,

          backgroundColor: COLORS.surface,
        },
        tabBarLabelStyle: {fontFamily: FONT_FAMILY.MEDIUM},
        tabBarActiveTintColor: COLORS.primary,
        tabBarAllowFontScaling: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Address}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Address}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
