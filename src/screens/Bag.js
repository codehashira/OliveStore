import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {FONT, FONT_FAMILY} from '../theme/fonts';
import BagProductItem from '../components/BagProductCard';
import {PrimaryButton} from '../components/Button';
import {useOliveDispatch, useOliveStore} from '../context/context';
import {removeFromBag} from '../context/actions';

const styles = StyleSheet.create({
  bagViewMain: {
    flex: 1,
  },
  bagTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagTitle: {color: 'black', textAlign: 'center', marginRight: 8},
  bagTitleProducts: {color: 'gray', textAlign: 'center'},
  bagScrollView: {marginVertical: 16},
  bagPriceDetailsTitle: {color: 'gray'},
  bagPriceDetails: {
    borderTopWidth: 1,
    borderColor: '#eaede6',
    marginVertical: 8,
  },
  bagIndividualPriceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  bagIndividualPriceTitle: {color: 'black', fontSize: 10},
  bagIndividualPriceValue: {color: 'black', fontSize: 10},
  bagTotalPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#eaede6',
  },
  bagCheckoutView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eaede6',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

const Bag = ({navigation, route}) => {
  const state = useOliveStore();
  const dispatch = useOliveDispatch();
  const {bag} = state;

  const [bagPrice, setBagPrice] = useState(0);
  const [convenience, setConvenience] = useState(12);

  const handleRemove = productId => {
    dispatch(removeFromBag(productId));
  };

  useEffect(() => {
    const bagTotalPrice = bag.reduce((total, item) => total + item.price, 0);
    setBagPrice(bagTotalPrice);
  }, [bag]);

  return (
    <Surface>
      <View style={styles.bagViewMain}>
        <Header showBackButton={true} showBagButton={false} title={'Bag'} />
        {bag.length === 0 ? (
          <View>
            <Text style={[FONT.bodyMedium, styles.bagTitle]}>
              Your bag looks empty
            </Text>
          </View>
        ) : (
          <>
            <View style={{flex: 1, paddingHorizontal: 16}}>
              <View style={styles.bagTitleView}>
                <Text style={[FONT.bodyMedium, styles.bagTitleProducts]}>{`${
                  bag.length === 1 ? '1 Product' : `${bag.length} products`
                }`}</Text>
              </View>
              <ScrollView style={styles.bagScrollView}>
                {bag.map(item => (
                  <BagProductItem {...item} handleRemove={handleRemove} />
                ))}

                <Text style={[FONT.bodyMedium, styles.bagPriceDetailsTitle]}>
                  Price Details
                  {`  (${bag.length === 1 ? '1 item' : `${bag.length} items`})`}
                </Text>
                <View style={styles.bagPriceDetails}>
                  <View style={styles.bagIndividualPriceDetails}>
                    <Text
                      style={[FONT.bodySmall, styles.bagIndividualPriceTitle]}>
                      Bag Total
                    </Text>
                    <Text
                      style={[
                        FONT.labelMedium,
                        styles.bagIndividualPriceTitle,
                      ]}>
                      $ {bagPrice}
                    </Text>
                  </View>
                  <View style={styles.bagIndividualPriceDetails}>
                    <Text
                      style={[FONT.bodySmall, styles.bagIndividualPriceValue]}>
                      Convenience Fee
                    </Text>
                    <Text
                      style={[
                        FONT.labelMedium,
                        styles.bagIndividualPriceTitle,
                      ]}>
                      $ {convenience}
                    </Text>
                  </View>
                  <View style={styles.bagTotalPriceView}>
                    <Text
                      style={[FONT.labelSmall, styles.bagIndividualPriceTitle]}>
                      Total Amount
                    </Text>
                    <Text
                      style={[
                        FONT.labelMedium,
                        styles.bagIndividualPriceTitle,
                      ]}>
                      $ {bagPrice + convenience}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.bagCheckoutView}>
              <View>
                <Text style={[FONT.bodyMedium, {color: 'black'}]}>
                  $ {bagPrice + convenience}
                </Text>
                <Text style={[FONT.labelSmall, {color: 'gray'}]}>Total</Text>
              </View>
              <PrimaryButton title={'Proceed to Payment'} />
            </View>
          </>
        )}
      </View>
    </Surface>
  );
};

export default Bag;
