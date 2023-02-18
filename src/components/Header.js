import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FONT} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {IconButton} from './Button';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function Header({
  title,
  showBackButton = false,
  showBagButton = true,
}) {
  const navigation = useNavigation();

  const handleOnBagPress = () => {
    navigation.navigate('Bag');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <FeatherIcon
          name="arrow-left"
          size={20}
          color={COLORS.PRIMARY}
          onPress={handleBackPress}
        />
      )}
      <Text style={[FONT.titleMedium, {color: COLORS.PRIMARY}]}>
        {title ? title : ''}
      </Text>
      {showBagButton && (
        <IconButton onPress={handleOnBagPress}>
          <FeatherIcon
            name={'shopping-bag'}
            color={COLORS.SECONDARY}
            size={20}
          />
        </IconButton>
      )}
    </View>
  );
}
