import { createStackNavigator } from 'react-navigation';
import Sell from '../screens/Sell/SellScreenContainer';
import screens from './screens';

const routes = {
  [screens.Sell]: Sell,
};

const SellNavigator = createStackNavigator(routes);

export default SellNavigator;
