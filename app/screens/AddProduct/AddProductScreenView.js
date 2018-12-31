import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import s from './styles';

const AddProductScreenView = () => (
  <View style={s.container}>
    <StatusBar hidden />
    <View style={s.buttons}>
      <View style={s.cancel}>
        {/* <Button title="Cancel" style={s.cancelBtn} /> */}
        <Text style={s.cancelBtn}>Cancel</Text>
      </View>
      <View style={s.fotoBtn}>
        <View style={s.fotoBtn2} />
      </View>
      <View style={s.changeCamera}>
        <Ionicons
          name="ios-reverse-camera"
          style={s.iconChange}
          size={38}
        />
      </View>
    </View>
  </View>
);

AddProductScreenView.navigationOptions = {
  header: null,
};

export default AddProductScreenView;
