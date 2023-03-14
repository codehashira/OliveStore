import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import {useOliveStore, useOliveDispatch} from '../context/context';
import {COLORS} from '../theme/colors';

const images = [
  'https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const styles = StyleSheet.create({
  homeMain: {flex: 1},
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({navigation, route}) => {
  const state = useOliveStore();
  const handleOnPress = category => {
    const categoryData = state.data.filter(item => item.category === category);
    navigation.navigate('List', {category, data: categoryData});
  };
  return (
    <Surface>
      <View style={styles.homeMain}>
        <Header title={'Olive Store'} enableSearch={true} />
        {state.data.length > 0 ? (
          <FlatList
            data={state.categories}
            keyExtractor={item => item}
            renderItem={({item, index}) => (
              <CategoryCard
                image={images[index]}
                title={item}
                onPress={() => {
                  handleOnPress(item);
                }}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{paddingHorizontal: 16}}
          />
        ) : (
          <View style={styles.loadingView}>
            <ActivityIndicator
              loading={true}
              size={48}
              color={COLORS.primary}
            />
          </View>
        )}
      </View>
    </Surface>
  );
};

export default Home;
