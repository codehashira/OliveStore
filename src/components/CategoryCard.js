import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {FONT} from '../theme/fonts';

const styles = StyleSheet.create({
  categoryCard: {
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

const CategoryCard = ({category, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.categoryCard}
      activeOpacity={0.7}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.categoryImage}>
        <Text style={[FONT.titleLarge, styles.categoryTitle]}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
