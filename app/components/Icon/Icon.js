import React from 'react';
import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon';
import T from 'prop-types';

import glyphMap from '../../../assets/fonts/icon/selection.json';
import { colors } from '../../styles';
import s from './styles';

const Icons = createIconSetFromIcoMoon(glyphMap, 'icomoon');

const Icon = ({
  IconSet = Icons,
  size = 24,
  iconName,
  iconStyle,
  color = colors.tabIconColor,
}) => (
  <IconSet
    name={iconName}
    style={[s.icon, size && { fontSize: size }, iconStyle]}
    color={color}
  />
);

Icon.propTypes = {
  iconName: T.string,
  size: T.number,
  iconStyle: T.any,
  IconSet: T.any,
};

export default Icon;
