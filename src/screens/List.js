import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Surface from '../components/Surface';
import Header from '../components/Header';
import {FONT} from '../theme/fonts';
import ProductCard from '../components/ProductCard';
import {ListIcon, SortIcon} from '../components/AppIcons';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  listContainer: {flex: 1},
  listView: {flex: 1, paddingHorizontal: 16},
  listProductText: {color: COLORS.outline},
  listFilterView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#eaede6',
    paddingHorizontal: 16,
  },
  flatListColumnWrapperStyle: {justifyContent: 'space-between'},
  flatListStyle: {marginVertical: 8},
  modifiersButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  modifierButtonText: {color: 'black', marginLeft: 8},
});

const List = ({navigation, route}) => {
  const {category, data} = route.params;
  return (
    <Surface>
      <View style={styles.listContainer}>
        <Header showBackButton={true} title={category} />
        <View style={styles.listView}>
          <Text style={[FONT.labelSmall, styles.listProductText]}>
            {data.length} Products
          </Text>
          <FlatList
            data={data}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <ProductCard {...item} navigation={navigation} />
            )}
            numColumns={2}
            columnWrapperStyle={styles.flatListColumnWrapperStyle}
            style={styles.flatListStyle}
          />
        </View>

        <View style={styles.listFilterView}>
          <TouchableOpacity style={styles.modifiersButton}>
            <SortIcon />
            <Text style={[FONT.labelSmall, styles.modifierButtonText]}>
              Sort
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modifiersButton}>
            <ListIcon />
            <Text style={[FONT.labelSmall, styles.modifierButtonText]}>
              Category
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modifiersButton}>
            <FeatherIcon name="filter" size={14} color={'black'} />
            <Text style={[FONT.labelSmall, styles.modifierButtonText]}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
  );
};

export default List;
