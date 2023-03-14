import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from './Text';

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#98f7b5',
    padding: 4,
    borderRadius: 8,
  },
  badgeContent: {color: '#00210e', fontSize: 8},
});

const Badge = ({badgeValue, badgeStyle, valueStyle}) => {
  return (
    <View style={[styles.badgeContainer, badgeStyle]}>
      <Text variant={'labelSmall'} style={[styles.badgeContent, valueStyle]}>
        {badgeValue}
      </Text>
    </View>
  );
};

export default Badge;
