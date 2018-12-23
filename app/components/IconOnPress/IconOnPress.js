import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import s from './styles';

const iconOnPress = ({ nameIcon, onPress, iconName }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={s.Container}>
      <Ionicons
        style={s.iconCart}
        name={iconName}
        size={32}
        color="black"
      />
    </View>
  </TouchableOpacity>
);

export default iconOnPress;
