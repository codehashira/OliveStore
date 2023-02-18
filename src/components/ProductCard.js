import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FONT} from '../theme/fonts';

const styles = StyleSheet.create({
  productCardMain: {
    width: '48%',
    borderWidth: 0.5,
    borderColor: '#eaede6',
    marginVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

const ProductCard = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  navigation,
}) => {
  const handleSelect = () => {
    navigation.navigate('Product', {
      product: {id, image, title, price, description, rating},
    });
  };
  return (
    <TouchableOpacity style={styles.productCardMain} onPress={handleSelect}>
      <Image
        source={{uri: image}}
        style={{height: 100, width: 70}}
        resizeMode="contain"
      />
      <Text style={[FONT.labelSmall, {color: 'black'}]} numberOfLines={1}>
        {title}
      </Text>
      <Text style={[FONT.labelMedium, {color: 'green'}]}>$ {price}</Text>
      {/* <Text style={[FONT.labelMedium, {color: 'red'}]}>{description}</Text> */}
    </TouchableOpacity>
  );
};

export default ProductCard;
