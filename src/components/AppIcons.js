import React from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../theme/colors';

const BaseIconSurface = ({children, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export const ShoppingBagIcon = () => (
  <FeatherIcon name="shopping-bag" size={20} color={COLORS.onSurfaceVariant} />
);

export const SearchIcon = () => (
  <FeatherIcon name="search" size={20} color={COLORS.onSurfaceVariant} />
);

export const SortIcon = () => {
  return (
    <MaterialIcon name={'sort'} size={16} color={COLORS.onSurfaceVariant} />
  );
};
export const SortIconPressable = ({onPress}) => {
  return <BaseIconSurface onPress={onPress}>{SortIcon}</BaseIconSurface>;
};

export const ListIcon = () => (
  <FeatherIcon name="list" size={14} color={COLORS.onSurfaceVariant} />
);

export const HeartIcon = () => {
  return <FeatherIcon name="heart" size={14} color={COLORS.onSurfaceVariant} />;
};
