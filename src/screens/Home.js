import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Surface from '../components/Surface';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import {useOliveStore, useOliveDispatch} from '../context/context';
import {COLORS} from '../theme/colors';

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
        <Header title={'Olive Store'} />
        {state.data.length > 0 ? (
          <ScrollView>
            {state.categories.map((item, index) => (
              <CategoryCard
                key={index}
                title={item}
                onPress={() => {
                  handleOnPress(item);
                }}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.loadingView}>
            <ActivityIndicator
              loading={true}
              size={48}
              color={COLORS.PRIMARY}
            />
          </View>
        )}
      </View>
    </Surface>
  );
};

export default Home;
