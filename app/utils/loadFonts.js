import { Font } from 'expo';

const icomoon = require('../../assets/fonts/icon/icomoon.ttf');
const roboto = require('../../assets/fonts/fonts/Roboto-Regular.ttf');

const loadFonts = async () => {
  await Promise.all([
    Font.loadAsync({
      icomoon,
      roboto,
    }),
  ]);
};

export default loadFonts;
