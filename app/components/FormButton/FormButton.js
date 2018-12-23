import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import s from './styles';

const FormButton = ({ onPress, iconName, text }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={s.container}>
      <Ionicons
        style={s.iconCart}
        name={iconName}
        size={32}
        color="black"
      />
      <Text style={s.text}>{text}</Text>
      <Entypo
        style={s.chevronRight}
        name="chevron-right"
        size={32}
        color="black"
      />
    </View>
  </TouchableOpacity>
);

export default FormButton;
