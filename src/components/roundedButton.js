import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth: 2,
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
