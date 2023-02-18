import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Product from '../screens/Product';
import Bag from '../screens/Bag';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Bag" component={Bag} />

      {/* <Stack.Screen name="Item" component={() => {}} />
      <Stack.Screen name="Cart" component={() => {}} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
