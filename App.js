import React from 'react';
import { SplashScreen } from 'expo';
import { Provider } from 'react-redux';

import {
  compose,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose';

import RootNavigator from './app/navigation/RootNavigator';
import store from './app/store';

import loadFonts from './app/utils/loadFonts';

const App = ({ isLoading }) =>
  (isLoading ? null : (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  ));

const enhance = compose(
  withState('isLoading', 'setLoading', true),
  lifecycle({
    async componentDidMount() {
      SplashScreen.preventAutoHide();
      try {
        await loadFonts();
        this.props.setLoading(false);
      } catch (err) {
        console.log(err.message, 'loadFontsERR');
      } finally {
        console.log('loadFonts-work');
        SplashScreen.hide();
      }
    },
  }),
);

export default enhance(App);
