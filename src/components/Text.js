import {Text as NativeText} from 'react-native';
import React from 'react';
import {FONT} from '../theme/fonts';

export default function Text({variant, style = {}, children}) {
  const getTextVariant = (variant, style, children) => {
    //if variant is not provided
    if (!variant) {
      return <NativeText style={style}>{children}</NativeText>;
    }
    return (
      <NativeText style={[FONT[variant], {color: 'black'}, style]}>
        {children}
      </NativeText>
    );
  };

  return getTextVariant(variant, style, children);
}
