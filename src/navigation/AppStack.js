import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Animated} from 'react-native';
import Home from '../screens/Home';
import List from '../screens/List';
import Product from '../screens/Product';
import Bag from '../screens/Bag';
import Search from '../screens/Search';
import Address from '../screens/address/Address';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen
        name="List"
        component={List}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Bag"
        component={Bag}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{cardStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
