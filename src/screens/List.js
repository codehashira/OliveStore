import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {getAllProducts} from '../api/storeapi';
import {FONT} from '../theme/fonts';
import ProductCard from '../components/ProductCard';
import {useOliveStore} from '../context/context';

const styles = StyleSheet.create({
  listTitleView: {},
});

const List = ({navigation, route}) => {
  const {category, data} = route.params;
  return (
    <Surface>
      <View style={{flex: 1}}>
        <Header showBackButton={true} />
        <View style={styles.listTitleView}>
          <Text
            style={[
              FONT.bodyMedium,
              {color: 'black', textTransform: 'capitalize'},
            ]}>
            {category}
          </Text>
          <Text style={[FONT.labelSmall, {color: 'gray'}]}>
            {data.length} Products
          </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ProductCard {...item} navigation={navigation} />
          )}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={{marginVertical: 8}}
        />
      </View>
    </Surface>
  );
};

export default List;
