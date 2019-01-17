import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import FormButton from '../../components/FormButton/FormButton';

// import s from './styles';

const DashboardScreenView = ({ goToCart }) => (
  <View>
    <FormButton onPress={goToCart} text="Cart" iconName="ios-cart" />
  </View>
);

DashboardScreenView.navigationOptions = {
  title: 'Dashboard',
};

DashboardScreenView.propTypes = {
  goToCart: T.func,
};

export default DashboardScreenView;
