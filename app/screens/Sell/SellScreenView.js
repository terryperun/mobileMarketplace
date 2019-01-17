import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// import s from './styles';

const SellScreenView = () => (
  <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
    <View>
      <Text>Sell</Text>
    </View>
  </SafeAreaView>
);

SellScreenView.navigationOptions = {
  title: 'Sell',
};

export default SellScreenView;
