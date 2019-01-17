import React from 'react';
import { View, Svg } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import s from './style';
import { colors } from '../../../styles';

const TabCentral = ({ tintColor }) => (
  <View style={s.fabContainer}>
    <Svg width="84" height="52" fill="none" version="1">
      <Svg.Path
        fill={colors.tabBar}
        fillRule="evenodd"
        d="M0 0h84v52H0V0zm42 36c19 0 35-14 36-33 0-2 1-3 3-3H3c2 0 3 1 3 3 0 19 16 33 36 33z"
      />
    </Svg>
    <View style={s.button}>
      <EvilIcons name="camera" size={39} color={colors.white} />
    </View>
  </View>
);

export default TabCentral;
