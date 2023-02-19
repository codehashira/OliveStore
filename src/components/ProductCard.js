import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {FONT, FONT_FAMILY} from '../theme/fonts';
import {HeartIcon} from './AppIcons';
import {fontScale} from '../utils/scaling';
import {IconButton} from './Button';

const styles = StyleSheet.create({
  productCardMain: {
    width: '48%',
    height: 250,
    borderWidth: 0.5,
    borderColor: '#eaede6',
    marginVertical: 8,
    borderRadius: 4,
  },
});

const getDiscountedPrice = (price, discount) =>
  (price * (discount / 100)).toFixed(2);

const ProductCard = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  navigation,
  discount,
}) => {
  const handleSelect = () => {
    navigation.navigate('Product', {
      product: {id, image, title, price, description, rating},
    });
  };

  return (
    <TouchableOpacity
      style={styles.productCardMain}
      onPress={handleSelect}
      activeOpacity={1}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: image}}
          style={{height: '70%', width: '90%'}}
          resizeMode="center"
        />
        <IconButton
          style={{
            height: 24,
            width: 24,
            position: 'absolute',
            zIndex: 2,
            bottom: 0,
            right: 0,
          }}>
          <HeartIcon />
        </IconButton>
      </View>
      <View style={{marginHorizontal: 8}}>
        <Text style={[FONT.labelSmall, {color: 'black'}]} numberOfLines={1}>
          {title}
        </Text>
        <Text
          style={[FONT.bodySmall, {color: 'gray', fontSize: fontScale(10)}]}
          numberOfLines={2}>
          {description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              FONT.bodyMedium,
              {
                color: 'black',
                fontSize: fontScale(8),
                fontFamily: FONT_FAMILY.BOLD,
              },
            ]}>
            $ {getDiscountedPrice(price, discount)}
          </Text>
          <Text
            style={[
              FONT.bodyMedium,
              {
                color: 'gray',
                fontSize: fontScale(8),
                textDecorationLine: 'line-through',
              },
            ]}>
            $ {price}
          </Text>
          <Text
            style={[
              FONT.bodyMedium,
              {
                color: 'black',
                fontSize: fontScale(8),
                fontFamily: FONT_FAMILY.MEDIUM,
              },
            ]}>
            {discount}% off
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
