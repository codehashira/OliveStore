import React from 'react';

import {View, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  surface: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fbfdf8',
  },
});

const Surface = ({children}) => {
  return <View style={styles.surface}>{children}</View>;
};

export default Surface;
