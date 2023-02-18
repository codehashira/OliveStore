import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RootNavigation from './src/navigation/RootNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
