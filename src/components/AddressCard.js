import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from './Text';
import {COLORS} from '../theme/colors';
import Badge from './Badge';
import Divider from './Divider';
import {TextButton} from './Button';

const styles = StyleSheet.create({
  addressCard: {
    padding: 16,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eaede6',
  },
  defaultBadgeStyle: {position: 'absolute', right: 0, top: -8},
  addressFullname: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressDetail: {
    marginTop: 8,
    justifyContent: 'space-between',
  },
  addressPhone: {marginTop: 8},
  addressCardActions: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeTextTitle: {
    color: COLORS.error,
  },
});

const AddressCard = ({
  fullname,
  fullAddress,
  phone,
  addressType,
  isDefault,
}) => {
  if (!fullAddress || !fullname || !phone || !addressType) {
    throw new Error('Please proved required Field');
  }

  return (
    <View style={styles.addressCard}>
      {isDefault && (
        <Badge badgeValue={'default'} badgeStyle={styles.defaultBadgeStyle} />
      )}
      <View style={styles.addressFullname}>
        <Text variant={'labelMedium'}>{fullname}</Text>
        {/* TODO : think something about address type design */}
        <Badge badgeValue={addressType} badgeStyle={{marginLeft: 8}} />
      </View>
      <View style={styles.addressDetail}>
        <Text variant={'bodySmall'}>{fullAddress}</Text>
        <Text variant={'bodySmall'} style={styles.addressPhone}>
          {phone}
        </Text>
      </View>
      <Divider vertical={false} />
      <View style={styles.addressCardActions}>
        <TextButton onPress={() => {}} title={'Edit'} />
        <Divider vertical={true} />
        <TextButton
          onPress={() => {}}
          title={'Remove'}
          titleStyle={styles.removeTextTitle}
        />
        {!isDefault && (
          <>
            <Divider vertical={true} />
            <TextButton
              onPress={() => {
                setDefault(true);
              }}
              title={'Default'}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default AddressCard;
