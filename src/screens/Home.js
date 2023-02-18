import React from 'react';
import {View, Text} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';

const Home = ({navigation, route}) => {
  return (
    <Surface>
      <View style={{flex: 1}}>
        <Header />
      </View>
    </Surface>
  );
};

export default Home;
