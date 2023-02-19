import React, {useState} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {FONT} from '../theme/fonts';
import {PrimaryButton, RadioButton} from '../components/Button';
import {useOliveDispatch} from '../context/context';
import {addToBag} from '../context/actions';

const styles = StyleSheet.create({
  sizeSelectionView: {
    // alignItems: 'center',
  },
  sizesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  productImage: {
    height: 250,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  textBlack: {color: 'black', marginVertical: 4},
  textGray: {color: 'gray', marginVertical: 4},
});

const Product = ({navigation, route}) => {
  const {product} = route.params;
  const {id, title, description, image, price} = product;

  const dispatch = useOliveDispatch();

  const [sizes, setSizes] = useState([30, 32, 34, 36, 38]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToBag = () => {
    if (selectedSize) {
      const cartItem = {
        id,
        title,
        price,
        image,
        size: selectedSize,
      };
      dispatch(addToBag(cartItem));
    }
  };

  return (
    <Surface>
      <View style={{flex: 1}}>
        <Header showBackButton={true} />
        <ScrollView>
          <>
            <Image
              source={{uri: image}}
              style={styles.productImage}
              resizeMode="contain"
            />
            <View style={{paddingHorizontal: 16}}>
              <Text style={[FONT.titleMedium, styles.textBlack]}>{title}</Text>
              <Text style={[FONT.labelSmall, styles.textGray]}>
                {description}
              </Text>
              <Text style={[FONT.titleMedium, styles.textBlack]}>
                $ {price}
              </Text>

              <View style={styles.sizeSelectionView}>
                <Text style={[FONT.labelSmall, styles.textGray]}>
                  Select Sizes
                </Text>
                <View style={styles.sizesView}>
                  {sizes.map(size => (
                    <RadioButton
                      value={size}
                      selected={selectedSize === size}
                      onPress={() => {
                        setSelectedSize(size);
                      }}
                    />
                  ))}
                </View>
              </View>
            </View>
          </>
        </ScrollView>
        <View style={{paddingHorizontal: 16}}>
          <PrimaryButton onPress={handleAddToBag} title={'Add to Bag'} />
        </View>
      </View>
    </Surface>
  );
};

export default Product;
