import {
  StyleSheet,
  TextInput as NativeTextInput,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../theme/colors';
import {FONT_FAMILY} from '../theme/fonts';

const ErrorText = ({errorText}) => {
  return <Text style={styles.errorTextContainer}>* {errorText}</Text>;
};

const TextInput = props => {
  const [focused, setFocused] = useState(false);
  const {error, onFocus, onBlur, style, editable} = props;
  return (
    <View style={style}>
      <NativeTextInput
        {...props}
        onFocus={() => {
          setFocused(true);
          if (onFocus) {
            onFocus();
          }
        }}
        onBlur={() => {
          setFocused(false);
          if (onBlur) {
            onBlur();
          }
        }}
        style={[
          styles.textInputStyle,
          error && !focused ? styles.textInputError : {},
          focused && styles.textInputFocused,
        ]}
      />
      {error && <ErrorText errorText={'Invalid phone number'} />}
    </View>
  );
};

export default TextInput;
export const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: 'black',
    borderColor: '#EAEAEA',
    fontFamily: 'Sora-Regular',
  },
  textInputError: {
    borderColor: COLORS.error,
    color: COLORS.error,
  },
  textInputFocused: {
    borderWidth: 1,
    borderColor: COLORS.onBackground,
  },
  errorTextContainer: {
    color: COLORS.error,
    marginTop: 8,
    borderRadius: 4,
    fontFamily: FONT_FAMILY.LIGHT,
    fontSize: 10,
  },
});
