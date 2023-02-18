import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {FONT} from '../theme/fonts';

const styles = StyleSheet.create({
  bagProductCardMain: {
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#eaede6',
    padding: 8,
    marginVertical: 8,
  },
  bagProductImage: {flex: 0.4, height: '100%', width: 40},
  bagProductRemoveIcon: {flex: 0.1, alignItems: 'flex-end'},
  bagProductDetailsView: {flex: 0.4},
  bagProductTitle: {color: 'gray'},
  bagProductPrice: {color: 'black'},
});

const BagProductItem = ({id, image, title, price, handleRemove}) => {
  return (
    <View style={styles.bagProductCardMain}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.bagProductImage}
        resizeMode="contain"
      />
      <View style={styles.bagProductDetailsView}>
        <Text
          style={[FONT.titleSmall, styles.bagProductTitle]}
          numberOfLines={3}>
          {title}
        </Text>
        <Text style={[FONT.titleMedium, styles.bagProductPrice]}>{price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleRemove(id);
        }}
        style={styles.bagProductRemoveIcon}>
        <FeatherIcon name="trash" size={16} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default BagProductItem;
