import {TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Text from './Text';

const styles = StyleSheet.create({
  categoryCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#e1e3de',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  categoryImage: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  categoryTitle: {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textTransform: 'capitalize',
  },
});

const CategoryCard = ({image, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.categoryCard}
      activeOpacity={0.7}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.categoryImage}>
        <Text variant={'labelLarge'} style={styles.categoryTitle}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
