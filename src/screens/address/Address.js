import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Surface from '../../components/Surface';
import Header from '../../components/Header';
import {COLORS} from '../../theme/colors';
import AddressCard from '../../components/AddressCard';
import Text from '../../components/Text';

const styles = StyleSheet.create({
  addressView: {flex: 1},
  addressContentView: {paddingHorizontal: 16, marginTop: 8},
  allAddressText: {color: COLORS.outline, marginTop: 8},
});

const address_data = [
  {
    id: 'address_data_1',
    fullname: 'Chetan Waghade',
    addressType: 'home',
    fullAddress: 'Panchshil Nagar, Khat Road, Bhandara, Maharashtra, 441904',
    phone: '+91-7559279778',
    isDefault: true,
  },
  {
    id: 'address_data_1',
    fullname: 'Chetan Waghade',
    addressType: 'home',
    fullAddress: 'Panchshil Nagar, Khat Road, Bhandara, Maharashtra, 441904',
    phone: '+91-7559279778',
    isDefault: false,
  },
];

const Address = ({navigation, route}) => {
  return (
    <Surface>
      <View style={styles.addressView}>
        <Header
          title={'Addresses'}
          enableSearch={false}
          showBackButton={true}
          showBagButton={false}
        />
        <View style={styles.addressContentView}>
          <Text variant={'labelMedium'} style={{color: COLORS.outline}}>
            Default Address
          </Text>
          <AddressCard {...address_data[0]} />
          <Text variant={'labelMedium'} style={styles.allAddressText}>
            All Address
          </Text>
          <ScrollView contentInsetAdjustmentBehavior={'always'}>
            <AddressCard {...address_data[1]} />
          </ScrollView>
        </View>
      </View>
    </Surface>
  );
};

export default Address;
