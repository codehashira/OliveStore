import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {FONT} from '../theme/fonts';
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
  bagIndividualPriceTitle: {color: 'black'},
  bagIndividualPriceValue: {color: 'black'},
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
  },
});

const Bag = ({navigation, route}) => {
  const state = useOliveStore();
  const dispatch = useOliveDispatch();
  const {bag} = state;

  const [totalPrice, setTotalPrice] = useState(0);
  const [convenience, setConvenience] = useState(12);

  const handleRemove = productId => {
    dispatch(removeFromBag(productId));
  };

  useEffect(() => {
    const totalCost = bag.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalCost);
  }, [bag]);

  return (
    <Surface>
      <View style={styles.bagViewMain}>
        <Header showBackButton={true} showBagButton={false} />
        {bag.length === 0 ? (
          <View>
            <Text style={[FONT.bodyMedium, styles.bagTitle]}>
              Your bag looks empty
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.bagTitleView}>
              <Text style={[FONT.bodyMedium, styles.bagTitle]}>Bag</Text>
              <Text style={[FONT.bodyMedium, styles.bagTitleProducts]}>{`(${
                bag.length === 1 ? '1 Product' : `${bag.length} products`
              })`}</Text>
            </View>
            <ScrollView style={styles.bagScrollView}>
              {bag.map(item => (
                <BagProductItem {...item} handleRemove={handleRemove} />
              ))}
              <>
                <Text style={[FONT.bodyMedium, styles.bagPriceDetailsTitle]}>
                  Price Details
                  {`  (${bag.length === 1 ? '1 item' : `${bag.length} items`})`}
                </Text>
                <View style={styles.bagPriceDetails}>
                  <View style={styles.bagIndividualPriceDetails}>
                    <Text
                      style={[FONT.labelSmall, styles.bagIndividualPriceTitle]}>
                      Total MRP
                    </Text>
                    <Text
                      style={[
                        FONT.labelMedium,
                        styles.bagIndividualPriceTitle,
                      ]}>
                      $ {totalPrice}
                    </Text>
                  </View>
                  <View style={styles.bagIndividualPriceDetails}>
                    <Text
                      style={[FONT.labelSmall, styles.bagIndividualPriceTitle]}>
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
                      Total MRP
                    </Text>
                    <Text
                      style={[
                        FONT.labelMedium,
                        styles.bagIndividualPriceTitle,
                      ]}>
                      $ {totalPrice + convenience}
                    </Text>
                  </View>
                </View>
              </>
            </ScrollView>
            <View style={styles.bagCheckoutView}>
              <View>
                <Text style={[FONT.bodyMedium, {color: 'black'}]}>
                  $ {totalPrice + convenience}
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
