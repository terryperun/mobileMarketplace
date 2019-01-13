import { Font } from 'expo';

const icomoon = require('../../assets/fonts/icon/icomoon.ttf');

const loadFonts = async () => {
  await Promise.all([
    Font.loadAsync({
      icomoon,
    }),
  ]);
};

export default loadFonts;
