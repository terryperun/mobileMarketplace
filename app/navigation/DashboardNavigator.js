import { createStackNavigator } from 'react-navigation';
import DashboardScreen from '../screens/Dashboard/DashboardScreenContainer';
import CartScreen from '../screens/Cart/CartScreenContainer';
import screens from './screens';

const routes = {
  [screens.Dashboard]: DashboardScreen,
  [screens.Cart]: CartScreen,
};

const DashboardNavigator = createStackNavigator(routes);

export default DashboardNavigator;
