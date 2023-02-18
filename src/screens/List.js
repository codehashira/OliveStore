import React from 'react';
import {View, Text, Button} from 'react-native';
import Surface from '../components/Surface';

const List = ({navigation, routes}) => {
  return (
    <View>
      <Text>List</Text>
      <Button
        title="List"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default List;
