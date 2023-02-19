import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {getAllProducts} from '../api/storeapi';
import {FONT} from '../theme/fonts';
import ProductCard from '../components/ProductCard';
import {useOliveStore} from '../context/context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ListIcon, SortIcon} from '../components/AppIcons';

const styles = StyleSheet.create({
  listView: {flex: 1, paddingHorizontal: 16},
  listFilterView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#eaede6',
    paddingHorizontal: 16,
  },
});

const List = ({navigation, route}) => {
  const {category, data} = route.params;
  return (
    <Surface>
      <View style={{flex: 1}}>
        <Header showBackButton={true} title={category} />
        <View style={styles.listView}>
          <Text style={[FONT.labelSmall, {color: 'gray'}]}>
            {data.length} Products
          </Text>
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

        <View style={styles.listFilterView}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 16,
            }}>
            <SortIcon />
            <Text style={[FONT.labelSmall, {color: 'black', marginLeft: 8}]}>
              Sort
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 16,
            }}>
            <ListIcon />
            <Text style={[FONT.labelSmall, {color: 'black', marginLeft: 8}]}>
              Category
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 16,
            }}>
            <FeatherIcon name="filter" size={14} color={'black'} />
            <Text style={[FONT.labelSmall, {color: 'black', marginLeft: 8}]}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
  );
};

export default List;
