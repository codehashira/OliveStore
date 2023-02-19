import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RootNavigation from './src/navigation/RootNavigator';
import {StoreStateContext, StoreDispatchContext} from './src/context/context';
import {initialState, reducer} from './src/context/reducer';
import {getAllProducts} from './src/api/storeapi';
import {loadOliveStore} from './src/context/actions';

const styles = {
  safeAreaView: {flex: 1},
};

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getStoreAsync = async () => {
      const [result, error] = await getAllProducts();
      if (result) {
        const mappedArray = result.map(item => {
          return {
            ...item,
            discount: Math.floor(Math.random() * 30) + 5,
          };
        });
        dispatch(loadOliveStore(mappedArray));
      } else {
        console.log(error);
      }
    };
    if (state.data.length === 0) {
      getStoreAsync();
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <StoreStateContext.Provider value={state}>
        <StoreDispatchContext.Provider value={dispatch}>
          <RootNavigation />
        </StoreDispatchContext.Provider>
      </StoreStateContext.Provider>
    </SafeAreaView>
  );
};

export default App;
