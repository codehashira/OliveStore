import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {FONT, FONT_FAMILY} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {IconButton} from './Button';
import {useNavigation} from '@react-navigation/native';
import {ShoppingBagIcon, SearchIcon} from './AppIcons';

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function Header({
  title,
  showBackButton = false,
  showBagButton = true,
  enableSearch = false,
  searchMode = false,
}) {
  const navigation = useNavigation();

  const handleOnBagPress = () => {
    navigation.navigate('Bag');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftView}>
        {showBackButton && (
          <FeatherIcon
            name="arrow-left"
            size={20}
            color={COLORS.primary}
            onPress={handleBackPress}
            style={{marginTop: 4, marginRight: 8, marginLeft: -4}}
          />
        )}
        <Text
          style={[
            FONT.titleMedium,
            {color: COLORS.onBackground, textTransform: 'capitalize'},
          ]}>
          {title ? title : ''}
        </Text>
      </View>
      <View></View>
      <View style={styles.rightView}>
        {enableSearch && (
          <IconButton onPress={handleSearch} style={{marginRight: 16}}>
            <SearchIcon />
          </IconButton>
        )}
        {showBagButton && (
          <IconButton onPress={handleOnBagPress}>
            <ShoppingBagIcon />
          </IconButton>
        )}
      </View>
    </View>
  );
}
