import {View, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Surface from '../components/Surface';
import {useOliveStore} from '../context/context';
import Text from '../components/Text';
import {debounce} from '../utils/helpers';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../theme/colors';
import {FONT_FAMILY} from '../theme/fonts';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    flex: 0.9,
    flexDirection: 'row',
  },
});

export default function Search({navigation, route}) {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState([]);
  const state = useOliveStore();
  const {data} = state;

  const onFinishTyping = value => {
    if (value.trim().length > 0) {
      const filtered = data.filter(item => item.title.includes(value));
      setResult(filtered);
    } else {
      setResult([]);
    }
  };

  const onFinishTypingDelay = debounce(onFinishTyping, 2000);

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <Surface>
      <View style={styles.header}>
        <View style={styles.leftView}>
          <FeatherIcon
            name="arrow-left"
            size={20}
            color={COLORS.PRIMARY}
            onPress={onBackPress}
            style={{marginTop: 4, marginRight: 8, marginLeft: -4}}
          />
        </View>
        <View style={styles.rightView}>
          <TextInput
            value={input}
            onChangeText={value => {
              setInput(value);
              onFinishTypingDelay(value);
            }}
            placeholder="Search brands & products"
            placeholderTextColor={'gray'}
            style={{
              width: '100%',
              fontFamily: FONT_FAMILY.REGULAR,
              color: 'black',
            }}
          />
        </View>
      </View>
      <View
        style={[
          {flex: 1},
          result.length > 0 && {backgroundColor: 'rgba(0,0,0,0.3)'},
        ]}>
        <View style={{backgroundColor: '#fbfdf8'}}>
          {result.map(item => (
            <Text
              variant={'labelMedium'}
              style={{
                borderColor: '#e1e3de',
                borderBottomWidth: 0.5,
                paddingVertical: 8,
                paddingHorizontal: 16,
              }}>
              {item.title}
            </Text>
          ))}
        </View>
      </View>
    </Surface>
  );
}
