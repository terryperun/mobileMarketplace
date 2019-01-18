import React from 'react';
import { View, Image, Text } from 'react-native';
import s from './styles';
import Icon from '../Icon/Icon';

// import ProductItem from '../ProductItem/ProductItemView';

const ProductItem = ({ image, title, price }) => (
  <View style={s.container}>
    <View style={s.containerImage}>
      <Image resizeMode="cover" source={image} style={s.image} />
    </View>
    <View>
      <View style={s.containerTitle}>
        <Text style={s.title}>{title}</Text>
      </View>
      <View style={s.bottomContainer}>
        <View style={s.containerPrice}>
          <Text style={s.price}>${price}</Text>
        </View>
        <View style={s.containerIcon}>
          <Icon iconName="saved-outline" size={15} />
        </View>
      </View>
    </View>
  </View>
);

export default ProductItem;
