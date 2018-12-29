import { createStackNavigator } from 'react-navigation';
import screens from './screens';

import AppNavigator from './AppNavigator';
import AddProductNavigator from './AddProductNavigator';

const routes = {
  [screens.App]: AppNavigator, // your tab navigator
  // [screens.AddProduct]: AddProductNavigator,
};

const RootNavigator = createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});

export default RootNavigator;
