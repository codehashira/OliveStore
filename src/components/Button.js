import {
  View,
  Text as NativeText,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {FONT, FONT_FAMILY} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import Text from './Text';

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: COLORS.primary,
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
    alignSelf: 'flex-start',
    height: 24,
    minWidth: 48,
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
  textButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textButtonTitle: {color: '#0d1f13'},
});

export function Button() {
  return (
    <View>
      <NativeText>Button</NativeText>
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
    <Pressable
      android_ripple={{color: '#98f7b5', borderless: false}}
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.primaryButton}>
      <NativeText style={[FONT.bodyMedium, styles.primaryButtonTitle]}>
        {title}
      </NativeText>
    </Pressable>
  );
};

export const RadioButton = ({value, onPress, selected, style = {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.radioButton,
        selected ? {backgroundColor: COLORS.onBackground} : {},
        style,
      ]}>
      <NativeText
        style={[
          FONT.labelSmall,
          styles.radioButtonTitle,
          selected ? {color: 'white'} : {},
        ]}>
        {value}
      </NativeText>
    </TouchableOpacity>
  );
};

export const TextButton = ({onPress, title, buttonStyle, titleStyle}) => (
  <Pressable onPress={onPress} style={[styles.textButton, buttonStyle]}>
    <Text variant={'bodySmall'} style={[styles.textButtonTitle, titleStyle]}>
      {title}
    </Text>
  </Pressable>
);
