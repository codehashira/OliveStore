import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {FONT, FONT_FAMILY} from '../theme/fonts';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: COLORS.PRIMARY,
    marginVertical: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 4,
  },
  primaryButtonTitle: {
    color: 'white',
    fontFamily: FONT_FAMILY.BOLD,
  },
});

export function Button() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}

export const IconButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};

export const PrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.primaryButton}>
      <Text style={[FONT.bodyMedium, styles.primaryButtonTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};
