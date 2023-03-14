import React from 'react';

import {View, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  surface: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fbfdf8',
    // paddingHorizontal: 16,
  },
});

const Surface = ({children, style}) => {
  return <View style={[styles.surface, style]}>{children}</View>;
};

export default Surface;
