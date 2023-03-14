import {View, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  verticalDivider: {width: 1, backgroundColor: '#eaede6'},
  horizontalDivider: {
    marginTop: 8,
    height: 1,
    width: '100%',
    backgroundColor: '#eaede6',
  },
});

const Divider = ({vertical}) => (
  <View style={vertical ? styles.verticalDivider : styles.horizontalDivider} />
);

export default Divider;
