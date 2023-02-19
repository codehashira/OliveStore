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
  radioButton: {
    height: 24,
    width: 48,
    backgroundColor: 'white',
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 4,
  },
  radioButtonTitle: {
    color: 'black',
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

export const IconButton = ({children, onPress, style = {}}) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 24, left: 24, right: 24, bottom: 24}}
      onPress={onPress}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
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

export const RadioButton = ({value, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.radioButton,
        selected ? {backgroundColor: COLORS.BLACK} : {},
      ]}>
      <Text
        style={[
          FONT.labelSmall,
          styles.radioButtonTitle,
          selected ? {color: 'white'} : {},
        ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
