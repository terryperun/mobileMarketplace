import { createBottomTabNavigator } from 'react-navigation';
import screens from './screens';
import SellScreen from '../screens/Sell/SellScreenContainer';

const routes = {
  [screens.Sell]: SellScreen,
};

const AppNavigator = createBottomTabNavigator(routes);

export default AppNavigator;
