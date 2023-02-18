import {View, Text} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={{paddingVertical: 16, paddingHorizontal: 8, borderWidth: 1}}>
      <Text
        style={{
          color: '#006d3b',
          fontFamily: 'Sora-Regular',
        }}>
        Olive Store
      </Text>
    </View>
  );
}
