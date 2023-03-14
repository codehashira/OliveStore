import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Surface from '../../components/Surface';
import Text from '../components/Text';
import TextInput from '../../components/TextInput';
import {PrimaryButton, RadioButton} from '../../components/Button';
import {REGEX} from '../../constants';

const AddressTypeView = ({addressType, setAddressType}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {['Home', 'Work', 'Other', "Friends's Home"].map((item, index) => (
        <RadioButton
          key={index + item}
          value={item}
          onPress={() => {
            setAddressType(item);
          }}
          selected={addressType === item}
          style={index > 0 ? {marginLeft: 8} : {}}
        />
      ))}
    </View>
  );
};

const AddAddress = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [locality, setLocality] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [addressType, setAddressType] = useState(null);
  const [errors, setErrors] = useState({phoneError: false, pincode: false});

  const validateFields = () => {
    let isValid = true;
    if (
      name.length === 0 ||
      locality.length === 0 ||
      extraAddress.length === 0 ||
      landmark.length === 0
    ) {
      isValid = false;
    }
    if (addressType === null) {
      isValid = false;
    }
    for (let key in errors) {
      if (errors[key]) {
        isValid = false;
      }
    }
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateFields();
    if (!isValid) {
      // TODO : Implement a common toast system
      if (Platform.OS === 'android') {
        ToastAndroid.show('Please enter valid fields', ToastAndroid.SHORT);
      }
      return;
    }
    console.log(
      JSON.stringify(
        {
          name,
          phone,
          pincode,
          city,
          state,
          locality,
          landmark,
          extraAddress,
          addressType,
        },
        null,
        ' ',
      ),
    );
  };

  const onPincodeBlur = useCallback(() => {
    setCity('');
    setState('');
    if (!pincode.match(REGEX.PINCODE) && pincode.length > 0) {
      setErrors({
        ...errors,
        pincode: true,
      });
    } else {
      setCity('Bhandara');
      setState('Maharashtra');
    }
  }, [pincode, errors]);

  const onPincodeFocus = () => {
    setErrors({...errors, pincode: false});
  };

  const onPhoneBlur = useCallback(() => {
    if (!phone.match(REGEX.PHONE) && phone.length > 0) {
      setErrors({
        ...errors,
        phoneError: true,
      });
    }
  }, [phone, errors]);

  const onPhoneFocus = () => {
    setErrors({...errors, phoneError: false});
  };

  return (
    <Surface>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#EAEAEA'}}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={{padding: 16, backgroundColor: 'white'}}>
                <Text variant={'labelMedium'}>Contact Info</Text>
                <TextInput
                  value={name}
                  onChangeText={value => {
                    setName(value);
                  }}
                  placeholder="Name"
                  placeholderTextColor={'#DDDDDD'}
                />
                <TextInput
                  value={phone}
                  onChangeText={value => {
                    setPhone(value);
                  }}
                  placeholder="Phone Number (+91)"
                  placeholderTextColor={'#DDDDDD'}
                  inputMode={'numeric'}
                  keyboardType={'number-pad'}
                  maxLength={10}
                  onBlur={onPhoneBlur}
                  onFocus={onPhoneFocus}
                  error={errors.phoneError}
                />
              </View>

              <View
                style={{padding: 16, marginTop: 8, backgroundColor: 'white'}}>
                <Text variant={'labelMedium'}>Address Info</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    value={pincode}
                    onChangeText={value => {
                      setPincode(value);
                    }}
                    style={{
                      width: '48%',
                    }}
                    placeholder="Pincode"
                    maxLength={6}
                    placeholderTextColor={'#DDDDDD'}
                    onBlur={onPincodeBlur}
                    onFocus={onPincodeFocus}
                    error={errors.pincode}
                  />
                  <TextInput
                    value={city}
                    onChangeText={value => {
                      setCity(value);
                    }}
                    editable={false}
                    style={{
                      width: '48%',
                    }}
                    placeholder="City"
                    placeholderTextColor={'#DDDDDD'}
                  />
                </View>

                <TextInput
                  value={state}
                  onChangeText={value => {
                    setState(value);
                  }}
                  editable={false}
                  placeholder="State"
                  placeholderTextColor={'#DDDDDD'}
                />
                <TextInput
                  value={locality}
                  onChangeText={value => {
                    setLocality(value);
                  }}
                  placeholder="Locality / Area / Street"
                  placeholderTextColor={'#DDDDDD'}
                />

                <TextInput
                  value={extraAddress}
                  onChangeText={value => {
                    setExtraAddress(value);
                  }}
                  placeholder="Flat no / Building Name"
                  placeholderTextColor={'#DDDDDD'}
                />

                <TextInput
                  value={landmark}
                  onChangeText={value => {
                    setLandmark(value);
                  }}
                  placeholder="Landmark (optional)"
                  placeholderTextColor={'#DDDDDD'}
                />
              </View>

              <View style={styles.addressTypeView}>
                <Text variant={'labelMedium'}>Type Of Address</Text>
                <AddressTypeView
                  addressType={addressType}
                  setAddressType={setAddressType}
                />
                {addressType === 'Other' && (
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor={'#DDDDDD'}
                  />
                )}
              </View>
              <View style={styles.submitArea}>
                <PrimaryButton title={'Add Address'} onPress={handleSubmit} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </Surface>
  );
};

export default AddAddress;

export const styles = StyleSheet.create({
  addressTypeView: {marginTop: 8, padding: 16, backgroundColor: 'white'},
  submitArea: {marginTop: 8, padding: 16, backgroundColor: 'white'},
});
