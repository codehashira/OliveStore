import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {FONT} from '../theme/fonts';
import {PrimaryButton} from '../components/Button';
import {useOliveDispatch} from '../context/context';
import {addToBag} from '../context/actions';

const Product = ({navigation, route}) => {
  const {product} = route.params;
  const {id, title, description, image, price} = product;

  const dispatch = useOliveDispatch();

  const handleAddToBag = () => {
    const cartItem = {
      id,
      title,
      price,
      image,
    };
    dispatch(addToBag(cartItem));
  };

  return (
    <Surface>
      <View style={{flex: 1}}>
        <Header showBackButton={true} />
        <ScrollView>
          <>
            <Image
              source={{uri: image}}
              style={{height: 250, width: '100%', marginBottom: 16}}
              resizeMode="contain"
            />
            <Text
              style={[FONT.titleMedium, {color: 'black', marginVertical: 4}]}>
              {title}
            </Text>
            <Text style={[FONT.labelSmall, {color: 'gray', marginVertical: 4}]}>
              {description}
            </Text>
            <Text
              style={[FONT.titleMedium, {color: 'black', marginVertical: 4}]}>
              $ {price}
            </Text>
          </>
        </ScrollView>
        <PrimaryButton onPress={handleAddToBag} title={'Add to Bag'} />
      </View>
    </Surface>
  );
};

export default Product;
